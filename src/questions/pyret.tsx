import classNames from "classnames";
import React, { useId, useState } from "react";

import type { Markdown } from "../bindings/Markdown";
// import { MoreInfo } from "../components/more-info";
import { PyretSnippet } from "../components/pyret-snippet";
import type { QuestionMethods } from "./types";
import { QuestionFields } from "../bindings/QuestionFields";

type PyretPrompt = {prompt:Markdown, program: string};
type PyretAnswer = any;
type Pyret = QuestionFields<PyretPrompt, PyretAnswer>;

export { Pyret, PyretPrompt, PyretAnswer };

export const PyretMethods: QuestionMethods<PyretPrompt, PyretAnswer> = {
  PromptView: ({ prompt, image }) => (
    <>
      <p>
        {prompt.prompt}
      </p>
      <PyretSnippet program={prompt.program} />
      {image && <img src={image} alt="" />}
    </>
  ),

  ResponseView: ({
    // prompt,
    formValidators: {
      required,
      formState: { errors }
    }
  }) => {
    return (<>
    You got it right!
    </>
    );
  },

  getAnswerFromDOM(data) {
    const doesCompile = data.doesCompile === "true";
    if (doesCompile) {
      const stdout = data.stdout;
      return { doesCompile, stdout };
    } else {
      return { doesCompile };
    }
  },

  AnswerView: ({ answer, baseline }) => {
    return (
      <div>
        TBD
      </div>
    );
  },

  compareAnswers(
    providedAnswer: PyretAnswer,
    userAnswer: PyretAnswer
  ): boolean {
    return true;
  }
};
