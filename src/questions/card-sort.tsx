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

  // For each X, iterate through the (sliced) rest of the array to form
  // an array of alphabetized X-Y pairs. Then flatten all the arrays
  const getPairs = arr => arr.map((X, idx) => arr.slice(idx+1).map(Y => [X,Y]))
    .flat();

  // For each group in the solution and user-answer, make a list of all pairs
  const solnGroupPairs = solution.map(getPairs);
  const userGroupPairs = userAnswer.map(getPairs);

  // Within each group, join each pair as a string, creating two arrays:
  //   1) Unordered pairs, where X is always in the same group as Y
  const oSolnGroupPairs = solnGroupPairs.map(g => g.map(p => p.join("-")));
  const oUserGroupPairs = userGroupPairs.map(g => g.map(p => p.join("-")));

  //   2) Ordered pairs, where X is always in the same group BEFORE Y
  const uSolnGroupPairs = solnGroupPairs.map(g => g.map(p => p.sort().join("-")));
  const uUserGroupPairs = userGroupPairs.map(g => g.map(p => p.sort().join("-")));

  // Compare groups
  const orderedGroupStrings   = solution.map(g => g.join("-"));
  const unOrderedGroupStrings = solution.map(g => g.sort().join("-"));

  // How many user groups exactly match the solution groups?
  const numOrderedRight = userAnswer.reduce((acc, g) =>
    acc + Number(orderedGroupStrings.includes(g.join("-"))), 0);
  const numUnOrderedRight = userAnswer.reduce((acc, g) =>
    acc + Number(unOrderedGroupStrings.includes(g.sort().join("-"))), 0);

  const pctOrderedGroupRight = numOrderedRight / solution.length;
  const pctUnOrderedGroupRight = numUnOrderedRight / solution.length;

  console.log(`${100*pctOrderedGroupRight}% orderedGroupMatches`);
  console.log(`${100*pctUnOrderedGroupRight}% unOrderedGroupMatches`);

  // Flatten these group-lists to compare individual card groupings
  const oSolnPairs = oSolnGroupPairs.flat();
  const oUserPairs = oUserGroupPairs.flat();
  const uSolnPairs = uSolnGroupPairs.flat();
  const uUserPairs = uUserGroupPairs.flat();

  console.log('oSolnPairs', oSolnPairs)
  console.log('uSolnPairs', uSolnPairs)

  // count the number of correct and incorrect user-pairs that
  // appear in the *ordered* set
  const oCorrectUserPairs = oUserPairs.filter(p => oSolnPairs.includes(p)).length;
  const oInorrectUserPairs = oUserPairs.filter(p => !oSolnPairs.includes(p)).length;
  const oPctRight = (oCorrectUserPairs / oSolnPairs.length);

  // count the number of correct and incorrect user-pairs that
  // appear in the *unordered* set
  const uCorrectUserPairs = uUserPairs.filter(p => uSolnPairs.includes(p)).length;
  const uIncorrectUserPairs = uUserPairs.filter(p => !uSolnPairs.includes(p)).length;
  const uPctRight = (uCorrectUserPairs / uSolnPairs.length);

  console.log(`${oCorrectUserPairs} (${100*oPctRight}%) ordered pairings are correct`);
  console.log(`${uCorrectUserPairs} (${100*uPctRight}%) unordered pairings are correct`);

console.log(oInorrectUserPairs, 'incorrect ordered pairings');
console.log(uIncorrectUserPairs, 'incorrect unordered pairings');

  return {
    groupScore: ordered? pctOrderedGroupRight : pctUnOrderedGroupRight,
    cardScore: ordered? oPctRight : uPctRight
  };

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
  ): number {

    console.log("Extracted answer content:", answer);
    console.log("Extracted useranswer content:", userAnswer.answer);

    const score = calculateSimilarityScore({ answer, ordered }, userAnswer);
    console.log("Similarity score:", score);

    return score.cardScore;

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
