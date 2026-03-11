import React, {useState} from "react";
import { QuestionMethods } from "./types";
import { QuestionFields, Markdown } from "../bindings/Question";
import { MatchingView } from "../components/matching"; // Point to the DnD component

/**
 * Data Types
 */
export type MatchingPrompt = {
  prompt: Markdown;
  leftColumn: string[];
  rightColumn: string[]
};

export type MatchingAnswer = {
  answer: Record<string, string[]>
};

// This is the member your Question.ts was missing
export type Matching = QuestionFields<MatchingPrompt, MatchingAnswer>;

export const MatchingMethods: QuestionMethods<MatchingPrompt, MatchingAnswer> = {
  PromptView: ({ prompt }) => <h3>{prompt.prompt}</h3>,

  ResponseView: ({ prompt, formValidators }) => {
    const { setValue, getValues, register } = formValidators;

    // 1. Initialize local state from the form's current value (or empty object)
    const [mapping, setMapping] = useState(getValues("answer") || {});

    const handleChange = (newMapping: any) => {
      // 2. Update local state to trigger a re-render
      setMapping(newMapping);

      // 3. Update the form state so the quiz engine can grade it
      // we use { shouldDirty: true } to let the form know the user has interacted
      setValue("answer", newMapping, { shouldDirty: true });
    };

    return (
      <div className="matching-question">
        <MatchingView
          prompt={prompt}
          value={mapping}
          onChange={handleChange}
        />
        {/* We keep this hidden input to ensure react-hook-form registers the 'answer' field */}
        <input type="hidden" {...register("answer")} />
      </div>
    );
  },

  compareAnswers(provided, user): number {
    const solution = provided.answer;
    const submission = user.answer || {};
    let correct = 0;
    let total = 0;

    Object.keys(solution).forEach(key => {
      const solSet = new Set(solution[key]);
      const userSet = new Set(submission[key] || []);

      solSet.forEach(item => {
        total++;
        if (userSet.has(item)) correct++;
      });
      userSet.forEach(item => {
        if (!solSet.has(item)) correct = Math.max(0, correct - 0.5);
      });
    });

    return total === 0 ? 1 : Math.max(0, correct / total);
  },

  AnswerView: ({ answer }) => (
    <div className="matching-review">
      {Object.entries(answer.answer || {}).map(([k, v]) => (
        <div key={k}><strong>{k}</strong>: {(v as string[]).join(", ")}</div>
      ))}
    </div>
  )
};