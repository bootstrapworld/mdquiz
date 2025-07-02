import { CardSortView } from "../components/card-sort";
import type { QuestionMethods } from "./types";
import type { QuestionFields, Markdown } from "../bindings/Question";
import { MarkdownView } from "../components/markdown";
import React, { useState } from "react";
import hash from "object-hash";


// a card is a tuple containing an id, some content, a (left/top) position, and optionally some children
type Card = { id?: string, content:string, top?: number, left?: number, children?: Card[] }
// a CardSort Prompt contains a normal prompt and a CardArray
type CardSortPrompt = { prompt: Markdown, cards: Card[] }
type CardSortAnswer = { answer: Array<Array<string>>, ordered: string}
type CardSort = QuestionFields<CardSortPrompt, CardSortAnswer>;

export { Card, CardSortPrompt, CardSortAnswer, CardSort };

/**
 * This function computes the similarity score between the user's answer
 * and the real answer, 0 to 1, where 1 is correct. If unordered, then
 * the score is based on ratio of correct element. If ordered, then the
 * partial credit is average between unordered score and a ratio of whether
 * cards are in the right position.
 * @param { answer: solution, ordered } solution
 * @param {userAnswer}
 * @returns A partial credit score for the answer.
 */
function calculateSimilarityScore(
  { answer: solution, ordered }: CardSortAnswer,
  { answer: userAnswer }: CardSortAnswer
): {groupScore: number, cardScore: number} {
  console.log("ordered is ", ordered, typeof ordered);

  // sort all groupings in the solution and user-generated answer
  const sSolution = structuredClone(solution).forEach(g => g.sort());
  const sUserAnswer = structuredClone(userAnswer).forEach(g => g.sort());

  // For each X, iterate through the (sliced) rest of the array to form
  // an array of alphabetized X-Y pairs. Then flatten all the arrays
  const getPairs = (arr) => arr.map((X, idx) =>
      arr.slice(idx+1).map(Y => [X, Y].join("-")))
    .flat();

  // Generate a set of all correct pairings for every group (g) of cards
  const solnPairs = new Set(sSolution.map(getPairs).flat());
  const userPairs = sUserAnswer.map(getPairs).flat();

  // count the number and pct of user-pairings that appear in the set
  const correctUserPairs = userPairs.filter(p => solnPairs.has(p)).length;
  const pctCorrect = (correctUserPairs / solnPairs.size);
  console.log(correctUserPairs, 'pairings are correct', 100 * pctCorrect, '%');

  // group comparisons: TBD

  return {groupScore: 0, cardScore: pctCorrect};

}

export const CardSortMethods: QuestionMethods<
  CardSortPrompt,
  CardSortAnswer
> = {
  PromptView: ({ prompt, image }) => {
    return (
      <div>
        <MarkdownView
          markdown={prompt.prompt}
        />
      </div>
    )
  },

  // Scrape the DOM to produce an array of groups
  // (each group is an array of id strings)
  getAnswerFromDOM(data, container):CardSortAnswer {
    const containerElement = (container as HTMLElement).querySelector('.container');
    const topLevelCards = Array.from(containerElement.querySelectorAll(":scope>.card"));

    // NOTE(Emmanuel) hacky nonsense function, to work around
    // the fact that we need to add periods to moved cards
    // to trigger a React update. When that is fixed, this can go
    const removePeriods = (s) => s.replaceAll('.', '');

    // for each top level card, extract an array of all id strings
    const cardData = topLevelCards.map((card) => {
      const cardsInGroup = [card, ...card.querySelectorAll(".card")];
      return cardsInGroup.map(c => removePeriods(c.id));
    });
    console.log("Extracted card data:", cardData);

    return { answer: cardData, ordered: "false" };
  },

  ResponseView: ({ prompt, submit, formValidators: { required } }) => {
    const [cardGrouping, setCardGrouping] = useState(prompt.cards);

    return (
      <div>
        <CardSortView
          data={cardGrouping}
          setCards={setCardGrouping}
        />
      </div>
    );
  },

  compareAnswers(
    {answer, ordered}: CardSortAnswer,
    userAnswer: CardSortAnswer
  ): boolean {

    console.log("Extracted answer content:", answer);
    console.log("Extracted useranswer content:", userAnswer.answer);

    const score = calculateSimilarityScore({ answer, ordered }, userAnswer);
    console.log("Similarity score:", score);

    if (score.cardScore == 1) {
      return true;
    } else {
      return false;
    }

  },

  AnswerView: ({ answer, baseline }) => {
    return (
      <div>
        <p>
            TBD
        </p>
        <p>{answer.answer.map((group, index) => (
                <div key={index}>
                  Group {index + 1}: {group.join(", ")}
                </div>
        ))}</p>
      </div>
    );
  }
};
