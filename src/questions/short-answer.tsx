import type { QuestionFields, Markdown } from "../bindings/Question";
import { MarkdownView } from "../components/markdown";
import type { QuestionMethods } from "./types";
import React from "react";

type ShortAnswerResponseFormat = "short" | "long" | "code";
type ShortAnswerPrompt = { prompt: Markdown, response?: ShortAnswerResponseFormat, }
type ShortAnswerAnswer = { answer: string, alternatives?: Array<string>, }
type ShortAnswer = QuestionFields<ShortAnswerPrompt, ShortAnswerAnswer>;
interface ShortAnswerState {
  cachedAnswer? : any;
}
export { ShortAnswer, ShortAnswerAnswer, ShortAnswerPrompt, ShortAnswerResponseFormat };

export const ShortAnswerMethods: QuestionMethods<
  ShortAnswerPrompt,
  ShortAnswerAnswer,
  ShortAnswerState
> = {
  PromptView: ({ prompt, image }) => (
    <div>
      <MarkdownView
        markdown={prompt.prompt}
        imag={image}
        snippetOptions={{ lineNumbers: true }}
      />
    </div>
  ),
  ResponseView: ({ prompt, state, submit, formValidators: { required } }) => {
    const formFields = required("answer");
    console.log('rendering Pyret ResponseView. cached Answer is', state.cachedAnswer);
    return (
      <>
        {!prompt.response || prompt.response === "short" ? (
          <input
            {...formFields}
            type="text"
            placeholder="Write your answer here..."
            onKeyDown={e => {
              if (e.key === "Enter") submit();
            }}
            value={state && state.cachedAnswer.answer}
          />
        ) : (
          /* prompt.response == "long" */
          <textarea {...formFields} placeholder="Write your answer here..." />
        )}
      </>
    );
  },

  AnswerView: ({ answer, baseline }) => (
    <code
      className={
        ShortAnswerMethods.compareAnswers!(baseline, answer)
          ? "correct"
          : "incorrect"
      }
    >
      {answer.answer}
    </code>
  ),

  compareAnswers(
    providedAnswer: ShortAnswerAnswer,
    userAnswer: ShortAnswerAnswer
  ): boolean {
    const clean = (s: string) => s.toLowerCase().trim();
    const possibleAnswers = [providedAnswer.answer]
      .concat(providedAnswer.alternatives || [])
      .map(clean);
    return possibleAnswers.includes(clean(userAnswer.answer));
  }
};
