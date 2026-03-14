import React, { useState, useEffect } from "react";
import { MatchingView } from "../components/matching";
import type { QuestionMethods } from "./types";
import type { QuestionFields, Markdown } from "../bindings/Question";

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
  PromptView: ({ prompt }) => (
    <div className="matching-prompt">
      <p>{prompt.prompt}</p>
    </div>
  ),

  ResponseView: ({ prompt, formValidators }) => {
    const { setValue, getValues } = formValidators;

    // 1. Initialize local state from the form's current value
    const [currentMapping, setCurrentMapping] = useState<MatchingAnswer>(
      getValues("answer") || {}
    );

    // 2. Whenever local state changes, sync it back to the form
    useEffect(() => {
      setValue("answer", currentMapping);
    }, [currentMapping, setValue]);

    return (
      <div className="matching-question">
        <MatchingView
          prompt={prompt}
          value={currentMapping}
          onChange={setCurrentMapping} // This triggers the re-render!
        />
        {/* Register the hidden field so the form knows to look for "answer" */}
        <input type="hidden" {...formValidators.register("answer")} />
      </div>
    );
  },

  // Boilerplate for the quiz engine
  questionState() { return {}; },

  getAnswerFromDOM: async (data) => data.answer,

  compareAnswers: (provided, user) => {
     // Your scoring logic here (e.g., check if user object matches provided object)
     return JSON.stringify(provided) === JSON.stringify(user) ? 1 : 0;
  },

  AnswerView: ({ answer }) => (
    <pre>{JSON.stringify(answer, null, 2)}</pre>
  )
};