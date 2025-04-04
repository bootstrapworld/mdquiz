import type { ShortAnswerAnswer } from "../bindings/ShortAnswerAnswer";
import type { ShortAnswerPrompt } from "../bindings/ShortAnswerPrompt";
import { MarkdownView } from "../components/markdown";
import type { QuestionMethods } from "./types";
import React from "react";

export let ShortAnswerMethods: QuestionMethods<
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
    let formFields = required("answer");
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
  ): boolean {
    let clean = (s: string) => s.toLowerCase().trim();
    let possibleAnswers = [providedAnswer.answer]
      .concat(providedAnswer.alternatives || [])
      .map(clean);
    return possibleAnswers.includes(clean(userAnswer.answer));
  }
};
