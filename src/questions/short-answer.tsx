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
      {answer?.answer ?? ""}
    </code>
  ),

  compareAnswers(
    providedAnswer: ShortAnswerAnswer,
    userAnswer: ShortAnswerAnswer
  ): number {
    // Quiz data can be malformed (e.g. a shortAnswer question authored
    // without an "answer" key at all -- so providedAnswer itself, not just
    // providedAnswer.answer, is undefined) -- rather than crash, treat a
    // missing provided answer as `false`, which can never match any
    // user-typed string, so the question is just always marked incorrect.
    const correctAnswer = providedAnswer?.answer ?? false;
    if (correctAnswer === false) return 0;

    const clean = (s: string) => s.toLowerCase().trim();
    const possibleAnswers = [correctAnswer]
      .concat(providedAnswer.alternatives || [])
      .map(clean);
    const correct = possibleAnswers.includes(clean(userAnswer.answer));
    return correct? 1 : 0;
  }
};
