import { CardSortPrompt, Card } from "../bindings/CardSortPrompt";
import { CardSortAnswer } from "../bindings/CardSortAnswer";
import { CardSortView } from "../components/card-sort";
import type { QuestionMethods } from "./types";
import { MarkdownView } from "../components/markdown";
import React from "react";

export const CardSortMethods: QuestionMethods<
  CardSortPrompt,
  CardSortAnswer
> = {
  PromptView: ({ prompt, image }) => (
    <div>
      <MarkdownView
        markdown={prompt.prompt}
        imag={image}
      />
      <CardSortView
        data={
          prompt.cards.map( card => {
            card.left = Math.random() * 400;
            card.top  = Math.random() * 200;
            return card
          })
        }
      />
    </div>
  ),
  ResponseView: ({ prompt, submit, formValidators: { required } }) => {
    const formFields = required("answer");
    return (<>Emmanuel hasn't figured out how to do this yet!</>);
  },

  AnswerView: ({ answer, baseline }) => {
    return (<>Emmanuel hasn't figured out how to do this yet!</>)
  }
};
