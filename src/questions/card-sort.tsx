import { CardSortPrompt, Card } from "../bindings/CardSortPrompt";
import { CardSortAnswer } from "../bindings/CardSortAnswer";
import { CardSortView } from "../components/card-sort";
import type { QuestionMethods } from "./types";
import { MarkdownView } from "../components/markdown";
import React, { useState } from "react";
import hash from "object-hash";

export const CardSortMethods: QuestionMethods<
  CardSortPrompt,
  CardSortAnswer
> = {
  PromptView: ({ prompt, image }) => {

    const [cardGrouping, setCardGrouping] = useState(prompt.cards);

    return (
      <div>
        <MarkdownView
          markdown={prompt.prompt}
          imag={image}
        />
        <CardSortView
          data={cardGrouping}
          updateData={setCardGrouping}
        />
      </div>
    )
  },

  ResponseView: ({ prompt, submit, formValidators: { required } }) => {
    const formFields = required("answer");
    return (<>Emmanuel hasn't figured out how to do this yet!</>);
  },

  compareAnswers(
    {answer, ordered}: CardSortAnswer,
    userAnswer: CardSortAnswer
  ): boolean {

    // Each group is either ordered (hash as-is) or
    // UN-ordered (convert to Set and then hash).
    const sanitize = (group) => ordered? group : new Set(group);

    // Array of groups -> Array of sanitized hashes 
    const sanitizeGroups = groups => groups.map(g => hash.MD5(sanitize(g)))

    const userHashes = sanitizeGroups(userAnswer.answer)
    const solnHashes = sanitizeGroups(answer)

    // compare the number of groups first, then make sure every hash
    // in the user answer shows up in the solution hashes
    return (userHashes.length == solnHashes.length) 
    // compare the actual hashes, one-by-one
      && userHashes.every(userHash => solnHashes.includes(userHash));
  },

  AnswerView: ({ answer, baseline }) => {
    return (<>Emmanuel hasn't figured out how to do this yet!</>)
  }
};
