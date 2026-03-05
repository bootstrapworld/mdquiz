import classNames from "classnames";
import React, { useId, useState, useEffect } from "react";
import { API } from "pyret-embed";

import { MarkdownView } from "../components/markdown";
import { PyretSnippet } from "../components/pyret-snippet";
import type { QuestionMethods } from "./types";
import { QuestionFields, Markdown } from "../bindings/Question";

// The actual data we care about
type PyretAnswerState = { editorContents: string; passed: boolean; };

// The structure required by mod.tsx (either a solution string or the wrapped state)
type PyretAnswer = string | { answer: PyretAnswerState };

type Pyret = QuestionFields<PyretPrompt, PyretAnswer>;
type PyretPrompt = { prompt: Markdown; program: string; checkblock?: string };

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
    formValidators: { getValues, register, setValue }
  }) => {
    // getValues("answer") returns the INNER object (PyretAnswerState)
    // because mod.tsx spreads the defaultValues
    const savedAnswer = getValues("answer") as PyretAnswerState | undefined;

    useEffect(() => {
      if (savedAnswer) {
        setValue("answer", savedAnswer);
      }
    }, [savedAnswer, setValue]);

    return (
      <>
        <input type="hidden" {...register("answer")} />
        <PyretSnippet
          program={savedAnswer?.editorContents || prompt.program}
          checkblock={prompt.checkblock}
        />
      </>
    );
  },

  async getAnswerFromDOM(_, parentNode, prompt) {
    const editorNode = document.getElementById('EmbeddedEditor');
    const editor = (editorNode as any).pyretEmbed as API;

    editor.runDefinitions();
    editor.setInteractions(prompt?.checkblock || "");
    const result = JSON.parse(await editor.runInteractionResult());

    // We return the wrapped version so mod.tsx can save it
    return {
      answer: {
        editorContents: editor.currentState().editorContents,
        passed: result.texts.some((t: string) => t.includes("Looks shipshape"))
      }
    };
  },

  AnswerView: ({ answer, baseline: solution }) => {
    // Check if 'answer' is the wrapped object
    const isObjectAnswer = typeof answer === 'object' && answer !== null && 'answer' in answer;

    // Extract the inner state if it exists
    const studentState = isObjectAnswer ? (answer as { answer: PyretAnswerState }).answer : null;

    const studentCode = studentState
      ? studentState.editorContents
      : (typeof answer === 'string' ? answer : "");

    const solutionCode = typeof solution === 'string' ? solution : "";
    const passed = studentState ? studentState.passed : true;

    const lines = studentCode.split('\n');
    const displayCode = lines[0]?.startsWith("use context")
      ? lines.slice(1).join('\n')
      : lines.join('\n');

    return (
      <div>
        <MarkdownView markdown={"```pyret\n" + displayCode + "\n```"} />
        <p />
        {studentState && (
          <b>{passed ? "This was correct!" : "This was not correct"}</b>
        )}
        <p />
        One possible answer is:
        <MarkdownView markdown={"```pyret\n" + solutionCode + "\n```"} />
      </div>
    );
  },

  compareAnswers(providedAnswer, userAnswer): number {
    // userAnswer is what comes back from getAnswerFromDOM (the wrapped object)
    if (typeof userAnswer === 'object' && userAnswer !== null && 'answer' in userAnswer) {
       const state = (userAnswer as { answer: PyretAnswerState }).answer;
       return state.passed ? 1 : 0;
    }
    return 0;
  }
};