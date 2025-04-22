import classNames from "classnames";
import React, { useId, useState } from "react";

//import type { TracingAnswer } from "../bindings/TracingAnswer";
//import type { TracingPrompt } from "../bindings/TracingPrompt";
import type { Markdown } from "../bindings/Markdown";
// import { MoreInfo } from "../components/more-info";
import { Snippet } from "../components/snippet";
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
      <Snippet snippet={prompt.program} lineNumbers />
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
