import { CardSortView } from "../components/card-sort";
import type { QuestionMethods } from "./types";
import type { QuestionFields, Markdown } from "../bindings/Question";
import { MarkdownView } from "../components/markdown";
import React, { useState } from "react";

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

  /**
   * Scrapes the DOM to produce an array of groups.
   * Stability fix: IDs no longer contain temporary periods.
   */
  getAnswerFromDOM(_data, container): CardSortAnswer {
    const containerElement = (container as HTMLElement).querySelector('.card-sort-container')
      || (container as HTMLElement).querySelector('.container');

    if (!containerElement) return { answer: [], ordered: "false" };

    const topLevelCards = Array.from(containerElement.querySelectorAll(":scope > .card:not(.card-placeholder)"));

    const cardData = topLevelCards.map((card) => {
      const cardsInGroup = [card, ...card.querySelectorAll(".card")];
      // Map IDs directly; cleaning logic is no longer required with the new store
      return cardsInGroup.map(c => c.id);
    });

    return { answer: cardData, ordered: "false" };
  },

  ResponseView: ({ prompt }) => {
    const [cardGrouping, setCardGrouping] = useState(prompt.cards);

    return (
      <div className="card-sort-response">
        <CardSortView
          data={cardGrouping}
          setCards={setCardGrouping}
        />
      </div>
    );
  },

  compareAnswers({ answer, ordered }, userAnswer): number {
    const score = calculateSimilarityScore({ answer, ordered }, userAnswer);
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