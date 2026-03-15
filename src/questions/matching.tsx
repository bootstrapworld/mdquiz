import React, { useState, useEffect } from "react";
import { MatchingView } from "../components/matching";
import type { QuestionMethods } from "./types";
import type { QuestionFields, Markdown } from "../bindings/Question";
import { MarkdownView } from "../components/markdown";

/**
 * Define the structure for this specific question type
 */
export type MatchingPrompt = {
  prompt: Markdown;
  leftColumn: string[];
  rightColumn: string[];
};

// The answer is a mapping of Left Items to an array of Right Items
export type MatchingAnswer = Record<string, string[]>;
export type Matching = QuestionFields<MatchingPrompt, MatchingAnswer>;

export const MatchingMethods: QuestionMethods<MatchingPrompt, MatchingAnswer> = {
  PromptView: ({ prompt }) => <MarkdownView markdown={prompt.prompt} />,

  ResponseView: ({ prompt, formValidators }) => {
    const { setValue, getValues } = formValidators;
    const [currentMapping, setCurrentMapping] = useState<MatchingAnswer>(getValues("answer") || {});

    useEffect(() => {
      setValue("answer", currentMapping);
    }, [currentMapping, setValue]);

    return (
      <div className="matching-question">
        <MatchingView
          prompt={prompt}
          value={currentMapping}
          onChange={setCurrentMapping}
        />
        <input type="hidden" {...formValidators.register("answer")} />
      </div>
    );
  },

  questionState() { return {}; },
  getAnswerFromDOM: async (data) => data.answer,
  compareAnswers: (provided, user) => (JSON.stringify(provided) === JSON.stringify(user) ? 1 : 0),
  AnswerView: ({ answer }) => <pre>{JSON.stringify(answer, null, 2)}</pre>
};