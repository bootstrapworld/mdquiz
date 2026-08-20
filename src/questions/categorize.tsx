import React, { useState, useEffect, useMemo } from "react";
import { CategorizeView } from "../components/categorize";
import type { QuestionMethods } from "./types";
import type { QuestionFields, Markdown } from "../bindings/Question";
import { MarkdownView } from "../components/markdown";

/**
 * Define the structure for this specific question type
 */
export type CategorizePrompt = {
  prompt: Markdown;
  leftColumn: string[];
  rightColumn: string[];
};

// The answer is a mapping of Left Items to an array of Right Items
export type CategorizeAnswer = Record<string, string[]>;
export type Categorize = QuestionFields<CategorizePrompt, CategorizeAnswer>;

export const CategorizeMethods: QuestionMethods<CategorizePrompt, CategorizeAnswer> = {
  PromptView: ({ prompt }) => <MarkdownView markdown={prompt.prompt} />,

  ResponseView: ({ prompt, answer, formValidators }) => {
    const { setValue, getValues } = formValidators;
    const [currentMapping, setCurrentMapping] = useState<CategorizeAnswer>(getValues("answer") || {});

    useEffect(() => {
      setValue("answer", currentMapping);
    }, [currentMapping, setValue]);

    // If the answer key never places the same rightColumn item into more
    // than one bucket, this question is 1:1 or 1:many (from the bucket's
    // side) rather than many:many. In that case, a dropped item should
    // move into its bucket instead of remaining available to drop again.
    const usesEachRightItemOnce = useMemo(() => {
      const seen = new Set<string>();
      for (const items of Object.values(answer || {})) {
        // Guard against malformed answer data (e.g. a bucket's value that
        // isn't an array of strings) so a bad quiz.json can't crash the
        // whole question -- fall back to the permissive many:many behavior.
        if (!Array.isArray(items)) return false;
        for (const item of items) {
          if (seen.has(item)) return false;
          seen.add(item);
        }
      }
      return true;
    }, [answer]);

    return (
      <div className="categorize">
        <CategorizeView
          prompt={prompt}
          value={currentMapping}
          onChange={setCurrentMapping}
          hideUsedCards={usesEachRightItemOnce}
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
