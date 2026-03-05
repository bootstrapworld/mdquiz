import { CardSortView } from "../components/card-sort";
import type { QuestionMethods } from "./types";
import type { QuestionFields, Markdown } from "../bindings/Question";
import { MarkdownView } from "../components/markdown";
import React, { useEffect, useState } from "react";

/**
 * Data Types
 */
export type Card = {
  id?: string;
  content: string;
  top?: number;
  left?: number;
  children?: Card[];
};

export type CardSortPrompt = { prompt: Markdown; cards: Card[] };
export type CardSortAnswer = { answer: string[][]; ordered: boolean };
export type CardSort = QuestionFields<CardSortPrompt, CardSortAnswer>;

/**
 * Compute similarity score between user answer and solution.
 */
function calculateSimilarityScore(
  { answer: solution, ordered: isOrdered }: CardSortAnswer,
  { answer: userAnswer }: CardSortAnswer
): { groupScore: number; cardScore: number } {

  const getPairs = (arr: string[]) =>
    arr.map((X, idx) => arr.slice(idx + 1).map(Y => [X, Y])).flat();

  const solnGroupPairs = solution.map(getPairs);
  const userGroupPairs = userAnswer.map(getPairs);

  // Helper to format pairs into strings for Set comparison
  const format = (p: string[]) => (isOrdered ? p.join("-") : [...p].sort().join("-"));

  // Convert to Sets for proper comparison and performance
  const oSolnPairs = new Set(solnGroupPairs.flat().map(format));
  const oUserPairs = new Set(userGroupPairs.flat().map(format));

  // Handle the edge case where no pairs exist in solution or user answer
  if (oSolnPairs.size === 0 && oUserPairs.size === 0) {
    return { groupScore: 0, cardScore: 1 };
  }

  const intersection = new Set([...oSolnPairs].filter(x => oUserPairs.has(x)));
  const union = new Set([...oSolnPairs, ...oUserPairs]);

  return {
    groupScore: 0,
    cardScore: intersection.size / union.size
  };
}

/**
 * Question Methods Export
 */
export const CardSortMethods: QuestionMethods<CardSortPrompt, CardSortAnswer> = {
  PromptView: ({ prompt }) => (
    <div>
      <MarkdownView markdown={prompt.prompt} />
    </div>
  ),

  // If we already have state (e.g. from a saved session), use it
  // Otherwise, generate random positions *once*, within 800x600
  questionState: (prompt, answer) => {
    const width = 800;
    const height = 600;

    const initializedCards = prompt.cards.map(card => ({
      ...card,
      children: card.children || [],
      left: card.left ?? Math.random() * (width - 250),
      top: card.top ?? Math.random() * (height - 250),
    }));
    return initializedCards;
  },

  // Grab state from a prior answer, if it exists
  ResponseView: ({ state, formValidators }) => {
    const savedCardState = formValidators.getValues("answer");
    const [cardGrouping, setCardGrouping] = useState(savedCardState || state);

    // Sync the interactive card state to the react-hook-form state
    useEffect(() => {
      formValidators.setValue("answer", cardGrouping);
    }, [cardGrouping, formValidators]);

    return (
      <div className="card-sort-response">
        <CardSortView
          data={cardGrouping}
          setCards={setCardGrouping}
        />
       {/* We register 'answer' so that handleSubmit in mod.tsx
           includes it in the 'data' object.
         */}
         <input type="hidden" {...formValidators.register("answer")} />
      </div>
    );
  },

  compareAnswers({ answer, ordered }, userAnswer): number {
    console.log(answer, ordered, userAnswer)

    // Extract the card array from the form data object
    const userAnswerState = userAnswer.answer;

    // Safety check in case data is malformed or empty
    if (!userAnswerState || !Array.isArray(userAnswerState)) {
      return 0;
    }

    const userGroups: string[][] = userAnswerState.map((card: any) => {
      const idsInGroup: string[] = [];

      // Recursive helper to gather all IDs in a nested group
      const collectIds = (c: any) => {
        if (c.id) idsInGroup.push(c.id);
        if (c.children) {
          c.children.forEach(collectIds);
        }
      };

      collectIds(card);
      return idsInGroup;
    });

    const formattedUserAnswer = {
      answer: userGroups,
      ordered: ordered
    };

    const score = calculateSimilarityScore({answer, ordered}, formattedUserAnswer);
    return score.cardScore;
  },

  AnswerView: ({ answer }) => (
    <div>
      <p><strong>Review Groupings:</strong></p>
      {answer.answer.map((group, index) => (
        <div key={index} style={{ marginBottom: '8px' }}>
          Group {index + 1}: {group.join(", ")}
        </div>
      ))}
    </div>
  )
};