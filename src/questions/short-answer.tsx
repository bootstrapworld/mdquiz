import type { QuestionFields, Markdown } from "../bindings/Question";
import { MarkdownView } from "../components/markdown";
import type { QuestionMethods } from "./types";
import React from "react";

type ShortAnswerResponseFormat = "short" | "long" | "code";
type ShortAnswerValidation = {
  required?: boolean,  // default: true, matching pre-existing always-required behavior
  numeric?: boolean,   // default: false
  min?: number,        // inclusive; only meaningful when numeric is true
  max?: number,        // inclusive; only meaningful when numeric is true
}
type ShortAnswerPrompt = { prompt: Markdown, response?: ShortAnswerResponseFormat, validation?: ShortAnswerValidation, }
type ShortAnswerAnswer = { answer: string, alternatives?: Array<string>, }
type ShortAnswer = QuestionFields<ShortAnswerPrompt, ShortAnswerAnswer>;
export { ShortAnswer, ShortAnswerAnswer, ShortAnswerPrompt, ShortAnswerResponseFormat, ShortAnswerValidation };

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
  ResponseView: ({ prompt, submit, formValidators }) => {
    const v = prompt.validation ?? {};
    const isRequired = v.required ?? true;

    // Bypasses the shared `required()` helper (which always sets
    // required:true) since ShortAnswer questions can now be optional, and
    // adds numeric/min/max checks on top -- validate() only runs its own
    // checks once a non-empty value has already cleared `required`.
    const formFields = formValidators.register("answer", {
      required: isRequired ? "This field is required" : false,
      validate: (val: string) => {
        if (val === "" || val == null) return true;
        if (v.numeric) {
          const num = Number(val);
          if (isNaN(num)) return "Must be a number";
          if (v.min != null && num < v.min) return `Must be at least ${v.min}`;
          if (v.max != null && num > v.max) return `Must be at most ${v.max}`;
        }
        return true;
      },
    });
    const error = formValidators.formState.errors.answer;
    const className = error ? "error" : "";

    return (
      <>
        {!prompt.response || prompt.response === "short" ? (
          <input
            {...formFields}
            className={className}
            type="text"
            autoComplete="off"
            placeholder="Write your answer here..."
            onKeyDown={e => {
              if (e.key === "Enter") submit();
            }}
          />
        ) : (
          /* prompt.response == "long" */
          <textarea {...formFields} className={className} placeholder="Write your answer here..." />
        )}
        {typeof error?.message === "string" && error.message && (
          <div className="field-error">{error.message}</div>
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
