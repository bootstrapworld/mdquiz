import type { ShortAnswerPrompt } from "../bindings/ShortAnswerPrompt";
import { MarkdownView } from "../components/markdown";
import type { QuestionMethods } from "./types";
import React from "react";

export let InformationalMethods: QuestionMethods<
  ShortAnswerPrompt,
  null,
  null
> = {
  PromptView: ({ prompt, image }) => (
    <MarkdownView
      markdown={prompt.prompt}
      imag={image}
      snippetOptions={{ lineNumbers: true }}
    />
  ),

  questionState() {
    return null;
  },

  ResponseView: () => (
    <div className="informational-message">
      <p>This is an informational question. No response is required.</p>
    </div>
  ),

  getAnswerFromDOM() {
    return null;
  },

  compareAnswers() {
    return true; // Always correct since no answer is required.
  },

  AnswerView: () => (
    <div className="informational-message">
      <p>This question is informational and does not have an answer.</p>
    </div>
  )
};
