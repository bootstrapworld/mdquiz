import { CardSortView } from "../components/card-sort";
import type { QuestionMethods } from "./types";
import type { QuestionFields, Markdown } from "../bindings/Question";
import { MarkdownView } from "../components/markdown";
import React, { useEffect, useState } from "react";

/**
 * Data Types
 */
export type CardData = {
  id?: string;
  content: string;
  top?: number;
  left?: number;
  children?: CardData[];
};

export type CardSortPrompt = { prompt: Markdown; cards: CardData[] };
export type CardSortAnswer = { answer: string[][]; ordered: string };
export type CardSort = QuestionFields<CardSortPrompt, CardSortAnswer>;

// Re-exporting Card for compatibility with other components
export { CardData as Card };

/**
 * Logic to compute similarity score between user answer and solution.
 */
function calculateSimilarityScore(
  { answer: solution, ordered }: CardSortAnswer,
  { answer: userAnswer }: CardSortAnswer
): { groupScore: number; cardScore: number } {
  const isOrdered = String(ordered) === "true";

  const getPairs = (arr: string[]) =>
    arr.map((X, idx) => arr.slice(idx + 1).map(Y => [X, Y])).flat();

  const solnGroupPairs = solution.map(getPairs);
  const userGroupPairs = userAnswer.map(getPairs);

  const oSolnPairs = solnGroupPairs.map(g => g.map(p => p.join("-"))).flat();
  const oUserPairs = userGroupPairs.map(g => g.map(p => p.join("-"))).flat();

  const uSolnPairs = solnGroupPairs.map(g => g.map(p => [...p].sort().join("-"))).flat();
  const uUserPairs = userGroupPairs.map(g => g.map(p => [...p].sort().join("-"))).flat();

  const unOrderedGroupStrings = solution.map(g => [...g].sort().join("-"));
  const numUnOrderedRight = userAnswer.reduce((acc, g) =>
    acc + Number(unOrderedGroupStrings.includes([...g].sort().join("-"))), 0);

  const oCorrectCount = oUserPairs.filter(p => oSolnPairs.includes(p)).length;
  const uCorrectCount = uUserPairs.filter(p => uSolnPairs.includes(p)).length;

  const oPctRight = oSolnPairs.length > 0 ? oCorrectCount / oSolnPairs.length : 0;
  const uPctRight = uSolnPairs.length > 0 ? uCorrectCount / uSolnPairs.length : 0;

  return {
    groupScore: isOrdered ? (numUnOrderedRight / solution.length) : (numUnOrderedRight / solution.length),
    cardScore: isOrdered ? oPctRight : uPctRight
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

  questionState: (prompt, answer) => {
    // If we already have state (e.g. from a saved session), use it
    // Otherwise, generate random positions once
    const width = 800; // Default boundary
    const height = 600;

    const initializedCards = prompt.cards.map(card => ({
      ...card,
      children: card.children || [],
      left: card.left ?? Math.random() * (width - 250),
      top: card.top ?? Math.random() * (height - 250),
    }));
    console.log('initialized cards:', initializedCards);
    return initializedCards;
  },

  ResponseView: ({ state, formValidators }) => {
    const [cardGrouping, setCardGrouping] = useState(state);

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