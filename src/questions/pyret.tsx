import classNames from "classnames";
import React, { useId, useState } from "react";
import { API } from "pyret-embed";

import { MarkdownView } from "../components/markdown";
import { PyretSnippet } from "../components/pyret-snippet";
import type { QuestionMethods } from "./types";
import { QuestionFields, Markdown } from "../bindings/Question";

type PyretPrompt = {prompt:Markdown, program: string, checkblock?: string};
type PyretAnswer = any;
type Pyret = QuestionFields<PyretPrompt, PyretAnswer>;

export { Pyret, PyretPrompt, PyretAnswer };

export const PyretMethods: QuestionMethods<PyretPrompt, PyretAnswer> = {
  PromptView: ({ prompt }) => (
    <>
      <p>
      <MarkdownView markdown={prompt.prompt} />
      </p>
    </>
  ),

  ResponseView: ({
    prompt,
    formValidators: {
      required,
      formState: { errors }
    }
  }) => {
    return (<>
      <PyretSnippet program={prompt.program} checkblock={prompt.checkblock}/>
    </>
    );
  },

  async getAnswerFromDOM(_, parentNode, prompt) {
    const editorNode = document.getElementById('EmbeddedEditor');
    const editor = (editorNode as any).pyretEmbed as API;
    editor.runDefinitions();
    editor.setInteractions(prompt.checkblock);
    const result = JSON.parse(await editor.runInteractionResult());
    console.log(result, editor.currentState(), result.texts.some(t => t.includes("Looks shipshape")));
    return result.texts.some(t => t.includes("Looks shipshape"))
  },

  AnswerView: ({ answer, baseline, prompt }) => {
    console.log(answer, baseline, prompt)

    // if the first line is a context, remove it
    let defns = answer.editorContents.split('\n');
    if(defns[0].startsWith("use context")) {
      defns = '`' + defns.slice(1).join('\n') + '`';
    }

    return (
      <div>
      <MarkdownView markdown={defns} />
      <p/>
      <b>{ answer.passed? "This was correct!" : "This was not correct" }</b>
      <p/>
      One possible answer is:
      <MarkdownView markdown={baseline} />
      </div>
    );
  },

  compareAnswers(
    providedAnswer: PyretAnswer,
    userAnswer: PyretAnswer
  ): boolean {
    return userAnswer;
  }
};
