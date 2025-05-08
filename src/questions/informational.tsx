import type { ShortAnswerPrompt } from "../bindings/ShortAnswerPrompt";
import type { Markdown } from "../bindings/Markdown";
import { MarkdownView } from "../components/markdown";
import type { QuestionMethods } from "./types";
import type { QuestionFields } from "../bindings/QuestionFields";
import React from "react";

type InformationalPrompt = { prompt: Markdown, }
type Informational = QuestionFields<InformationalPrompt, any>;
export { Informational, InformationalPrompt };

export const InformationalMethods: QuestionMethods<
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
      <p>Continue on to the next page</p>
    </div>
  ),

  getAnswerFromDOM() {
    return null;
  },

  compareAnswers() {
    return true; // Always correct since no answer is required.
  },

  AnswerView: () => (<></>)
};
