import classNames from "classnames";
import isEqual from "fast-deep-equal";
import React, { useId } from "react";

import { MarkdownView } from "../components/markdown";
import type { QuestionMethods } from "./types";
import type { QuestionFields, Markdown } from "../bindings/Question";

type MultipleChoiceAnswerFormat = Markdown | Array<Markdown>;
type MultipleChoiceAnswer = { answer: MultipleChoiceAnswerFormat, }
// A question with no answer key is a survey or confidence rating: it is never
// scored. `multiSelect` says whether it takes several choices ("select all that
// apply"); with a key, that is inferred from the key being an array.
type MultipleChoicePrompt = { prompt: Markdown, distractors: Array<Markdown>, answerIndex?: number, sortAnswers?: boolean, multiSelect?: boolean, }
type MultipleChoice = Omit<QuestionFields<MultipleChoicePrompt, MultipleChoiceAnswer>, "answer"> & { answer?: MultipleChoiceAnswer };
export { MultipleChoice, MultipleChoicePrompt, MultipleChoiceAnswer }

interface MultipleChoiceState {
  choices: string[];
}

const hasKey = (answer?: MultipleChoiceAnswer): answer is MultipleChoiceAnswer =>
  answer?.answer != null && !(Array.isArray(answer.answer) && answer.answer.length === 0);

const shuffle = <T,>(n: T[]) => [...n].sort(() => 0.5 - Math.random());

export const MultipleChoiceMethods: QuestionMethods<
  MultipleChoicePrompt,
  MultipleChoiceAnswer | undefined,
  MultipleChoiceState,
  MultipleChoiceAnswer
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
    const answers = !hasKey(answer)
      ? []
      : Array.isArray(answer.answer)
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

  ResponseView: ({ prompt, answer, state, formValidators: { required, register } }) => {
    const baseId = useId();
    return (
    <>
      {state!.choices.map((choice, i) => {
        const id = `${baseId}-${i}`;
        const multiAnswer = hasKey(answer) ? Array.isArray(answer.answer) : !!prompt.multiSelect;
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
    );
  },

  // data.answer will be the string (radio) or array of strings (checkbox)
  async getAnswerFromDOM(data) {
    if (Array.isArray(data.answer)) {
      return { answer: [...data.answer].sort() };
    }
    return { answer: data.answer };
  },

  compareAnswers(provided, user) {
    if (!hasKey(provided)) return 1; // unscored: nothing to get wrong
    const toList = (s: Markdown | Markdown[]) =>
      [...(Array.isArray(s) ? s : [s])].sort();
    const correct = isEqual(toList(provided.answer), toList(user.answer));
    return correct? 1 : 0;
  },

  AnswerView: ({ answer, baseline }) => (
    <div
      className={classNames(
        "md-flex",
        !hasKey(baseline)
          ? undefined
          : MultipleChoiceMethods.compareAnswers!(baseline, answer)
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
