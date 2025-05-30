import { CardSortView } from "../components/card-sort";
import type { QuestionMethods } from "./types";
import type { QuestionFields, Markdown } from "../bindings/Question";
import { MarkdownView } from "../components/markdown";
import React, { useState } from "react";
import hash from "object-hash";


// a card is a tuple containing a title and some content
type Card = { id?: string, title:string, content:string, top?: number, left?: number, children?: Card[] }
// a CardSort Prompt contains a normal prompt and a CardArray
type CardSortPrompt = { prompt: Markdown, cards: Card[] }
type CardSortAnswer = { answer: Array<Array<string>>, ordered: string}
type CardSort = QuestionFields<CardSortPrompt, CardSortAnswer>;

export { Card, CardSortPrompt, CardSortAnswer, CardSort };

/**
 * This function computes the similarity score between the user's answer and the real answer, 0 to 1, where 1 is correct. If unordered, then the score is based on ratio of correct element. If ordered, then the partial credit is average between unordered score and a ratio of whether cards are in the right position.
 * @param { answer: solution, ordered } solution
 * @param {userAnswer}
 * @returns A partial credit score for the answer.
 */
function calculateSimilarityScore(
  { answer: solution, ordered }: CardSortAnswer,
  { answer: userAnswer }: CardSortAnswer
): number {
  console.log("ordered is ", ordered, typeof ordered);

  const sanitize = (group) => (ordered ? group : new Set(group));
  const sanitizedSolution = solution.map(sanitize);
  const sanitizedUserAnswer = userAnswer.map(sanitize);

  let totalItems = 0;
  let matchingItems = 0;

  // Compare each group in the solution with each group in the user answer
  sanitizedSolution.forEach((solutionGroup) => {
  const solutionSet = new Set(solutionGroup);
  totalItems += solutionSet.size;

  // Find the best matching group in the user answer
  let bestMatchCount = 0;
  sanitizedUserAnswer.forEach((userGroup) => {
    const userSet = new Set(userGroup);
    const intersection = new Set(
      [...solutionSet].filter((item) => userSet.has(item))
    );
    bestMatchCount = Math.max(bestMatchCount, intersection.size);
  });
    matchingItems += bestMatchCount;
  });
  // Check if the total number of groups matches
  if (sanitizedSolution.length !== sanitizedUserAnswer.length) {
    return 0; // Return 0 if the number of groups is not the same
  }
  // Calculate the similarity score
  const unOrderedScore = totalItems > 0 ? matchingItems / totalItems : 0;

  if (ordered === "true") {
    console.log("Comparing ordered groups");
    if (solution.length !== userAnswer.length) {
      return 0; // Return 0 if the number of groups is not the same
    }
  
    let totalItems = 0;
    let matchingItems = 0;
  
    // Compare each group in order
    for (let i = 0; i < solution.length; i++) {
      const solutionGroup = solution[i];
      const userGroup = userAnswer[i];
  
      // If group sizes don't match, return 0
      if (solutionGroup.length !== userGroup.length) {
        return 0;
      }
  
      totalItems += solutionGroup.length;
  
      // Compare elements in the same order
      for (let j = 0; j < solutionGroup.length; j++) {
        if (solutionGroup[j] === userGroup[j]) {
          matchingItems++;
        }
      }
    }
  
    // Calculate the similarity score
    const orderedScore = totalItems > 0 ? matchingItems / totalItems : 0;
    console.log("Ordered score:", orderedScore);
    console.log("Unordered score:", unOrderedScore);
    return (orderedScore + unOrderedScore) / 2;
  } else {
    console.log("Comparing unordered groups");
    return unOrderedScore;
  }
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

  // not done yet - need to figure out how to return the state
  getAnswerFromDOM(data, container):CardSortAnswer {
    const containerElement = container as HTMLElement;
    
    const cards = Array.from(containerElement.querySelectorAll(".card"));
    const cardData = cards.map((card) => {
      const title = card.querySelector(".card-title")?.textContent || "";
      const children = Array.from(card.querySelectorAll(".card-child")).map((child) => child.textContent || "");
      return { title, children };
    });
    console.log("Extracted card data:", cardData);

    const textContent = containerElement.innerText || containerElement.textContent || "";
    const jsonMatch = textContent.match(/\[\s*{[\s\S]*}\s*\]/);
    const jsonContent = jsonMatch ? JSON.parse(jsonMatch[0]) : [];
    function extractTitlesOnly(data) {
      if (Array.isArray(data)) {
        return data.map(extractTitlesOnly);
      } else if (typeof data === "object" && data !== null) {
        if ("title" in data) {
          return { title: data.title, children: extractTitlesOnly(data.children || []) };
        }
        return extractTitlesOnly(data.children || []);
      }
      return [];
    }

    function groupTitlesByParent(data) {
      const result = [];
    
      function traverse(node) {
        const group = [];
    
        // Add the current node's title
        if (node.title) {
          group.push(node.title);
        }
    
        // Recursively process children and add their titles
        if (node.children && Array.isArray(node.children)) {
          node.children.forEach((child) => {
            group.push(...traverse(child));
          });
        }
    
        return group;
      }
    
      // Start traversal for each root node in the array
      if (Array.isArray(data)) {
        data.forEach((item) => {
          result.push(traverse(item));
        });
      } else {
        result.push(traverse(data));
      }
    
      return result;
    }

    const titles = extractTitlesOnly(jsonContent);
    // console.log("Extracted JSON content:", titles);
    const groupedTitles = groupTitlesByParent(titles);
    // console.log(groupedTitles);
    return { answer: groupedTitles, ordered: "false" };
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

    // console.log("Extracted answer content:", answer);
    // console.log("Extracted useranswer content:", userAnswer.answer);

    const score = calculateSimilarityScore({ answer, ordered }, userAnswer);
    // console.log("Similarity score:", score);

    if (score == 1) {
      return true;
    } else {
      return false;
    }

  },

  AnswerView: ({ answer, baseline }) => {
    return (
      <div>
        <p>
            {CardSortMethods.compareAnswers(baseline || { answer: [], ordered: "false" }, answer)
            ? `${calculateSimilarityScore(baseline || { answer: [], ordered: "false" }, answer) * 100}% correct.`
            : `The answer is ${(calculateSimilarityScore(baseline || { answer: [], ordered: "false" }, answer) * 100).toFixed(2)}% correct.`}

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
