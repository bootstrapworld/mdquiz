import classNames from "classnames";
import isEqual from "fast-deep-equal";
import React, { useId } from "react";

import { toJS } from "mobx";
import { MarkdownView } from "../components/markdown";
import type { QuestionMethods } from "./types";
import type { QuestionFields, Markdown } from "../bindings/Question";

type MultipleChoiceAnswerFormat = Markdown | Array<Markdown>;
type MultipleChoiceAnswer = { answer: MultipleChoiceAnswerFormat, }
type MultipleChoicePrompt = { prompt: Markdown, distractors: Array<Markdown>, answerIndex?: number, sortAnswers?: boolean, }
type MultipleChoice = QuestionFields<MultipleChoicePrompt, MultipleChoiceAnswer>;
export { MultipleChoice, MultipleChoicePrompt, MultipleChoiceAnswer }

interface MultipleChoiceState {
  choices: string[];
  cachedAnswer? : any;
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

  ResponseView: ({ answer, state, formValidators: { required, register } }) => {
    console.log('rendering MultiChoice ResponseView. cachedAnswer is', state.cachedAnswer?.answer);
    return (<>
      {state!.choices.map((choice, i) => {
        const isChecked = state.cachedAnswer?.answer === choice || state.cachedAnswer?.answer.includes(choice);
        console.log(`checking choice ${i}:`, choice, 'answer includes?', isChecked);
        const id = useId();
        const multiAnswer = Array.isArray(answer.answer);
        return (
          <div className="choice" key={i}>
            <label htmlFor={String(i)}>
            <input
              type={multiAnswer ? "checkbox" : "radio"}
              {...(multiAnswer
                ? register("answer", {
                    validate: args => args.length > 0
                  })
                : required("answer"))}
              value={choice}
              checked={true}
              id={String(i)}
            />
              <MarkdownView markdown={choice} />
            </label>
          </div>
        );
      })}
    </>)
  },

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
