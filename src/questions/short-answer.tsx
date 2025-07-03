import type { QuestionFields, Markdown } from "../bindings/Question";
import { MarkdownView } from "../components/markdown";
import type { QuestionMethods } from "./types";
import React from "react";

type ShortAnswerResponseFormat = "short" | "long" | "code";
type ShortAnswerPrompt = { prompt: Markdown, response?: ShortAnswerResponseFormat, }
type ShortAnswerAnswer = { answer: string, alternatives?: Array<string>, }
type ShortAnswer = QuestionFields<ShortAnswerPrompt, ShortAnswerAnswer>;
export { ShortAnswer, ShortAnswerAnswer, ShortAnswerPrompt, ShortAnswerResponseFormat };

export const ShortAnswerMethods: QuestionMethods<
  ShortAnswerPrompt,
  ShortAnswerAnswer
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
  ResponseView: ({ prompt, submit, formValidators: { required } }) => {
    const formFields = required("answer");
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
  ): number {
    const clean = (s: string) => s.toLowerCase().trim();
    const possibleAnswers = [providedAnswer.answer]
      .concat(providedAnswer.alternatives || [])
      .map(clean);
    const correct = possibleAnswers.includes(clean(userAnswer.answer));
    return correct? 1 : 0;
  }
};
