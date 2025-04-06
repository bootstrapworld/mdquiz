import classNames from "classnames";
import isEqual from "fast-deep-equal";
import React, { useId } from "react";

import type { Markdown } from "../bindings/Markdown";
import type { MultipleChoiceAnswer } from "../bindings/MultipleChoiceAnswer";
import type { MultipleChoicePrompt } from "../bindings/MultipleChoicePrompt";
import { MarkdownView } from "../components/markdown";
import type { QuestionMethods } from "./types";

interface MultipleChoiceState {
  choices: string[];
}

const shuffle = (n:any[]) => [...n].sort(() => 0.5 - Math.random());

export const MultipleChoiceMethods: QuestionMethods<
  MultipleChoicePrompt,
  MultipleChoiceAnswer,
  MultipleChoiceState
> = {
  PromptView: ({ prompt, image }) => (
    <MarkdownView
      markdown={prompt.prompt}
      imag={image}
      snippetOptions={{ lineNumbers: true }}
    />
  ),

  questionState(prompt, answer) {
    let choices: string[];
    const answers = Array.isArray(answer.answer)
      ? answer.answer
      : [answer.answer];
    if (prompt.answerIndex !== undefined) {
      choices = [...prompt.distractors];
      choices.splice(prompt.answerIndex, 0, ...answers);
    } else {
      choices = [...answers, ...prompt.distractors];
      if (prompt.sortAnswers) {
        choices = choices.concat().sort();
      } else {
        choices = shuffle(choices);
      }
    }
    return { choices };
  },

  ResponseView: ({ answer, state, formValidators: { required, register } }) => (
    <>
      {state!.choices.map((choice, i) => {
        const id = useId();
        const multiAnswer = Array.isArray(answer.answer);
        return (
          <div className="choice" key={i}>
            <label htmlFor={id}>
            <input
              type={multiAnswer ? "checkbox" : "radio"}
              {...(multiAnswer
                ? register("answer", {
                    validate: args => args.length > 0
                  })
                : required("answer"))}
              value={choice}
              id={id}
            />
              <MarkdownView markdown={choice} />
            </label>
          </div>
        );
      })}
    </>
  ),

  getAnswerFromDOM(data) {
    if (Array.isArray(data.answer)) data.answer.sort();
    return { answer: data.answer };
  },

  compareAnswers(provided, user) {
    const toList = (s: Markdown | Markdown[]) =>
      (Array.isArray(s) ? s : [s]).sort();
    return isEqual(toList(provided.answer), toList(user.answer));
  },

  AnswerView: ({ answer, baseline }) => (
    <div
      className={classNames(
        "md-flex",
        MultipleChoiceMethods.compareAnswers!(baseline, answer)
          ? "correct"
          : "incorrect"
      )}
    >
      {Array.isArray(answer.answer) ? (
        <ul>
          {answer.answer.map((a, i) => (
            <li key={i}>
              <MarkdownView markdown={a} />
            </li>
          ))}
        </ul>
      ) : (
        <MarkdownView markdown={answer.answer} />
      )}
    </div>
  )
};
