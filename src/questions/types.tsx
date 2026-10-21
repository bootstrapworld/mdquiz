import React from "react";
import type {
  RegisterOptions,
  UseFormRegisterReturn,
  UseFormReturn
} from "react-hook-form";

// Answer is the authored answer key. UserAnswer is what a student's submission
// looks like at runtime; for most question types that is the same shape as the
// key, so it defaults to Answer.
export interface QuestionMethods<Prompt, Answer, State = any, UserAnswer = Answer> {
  PromptView: React.FC<{ prompt: Prompt; image?: string }>;

  ResponseView: React.FC<{
    prompt: Prompt;
    answer: Answer;
    submit: () => void;
    state?: State;
    formValidators: UseFormReturn & {
      required: (
        name: string,
        options?: RegisterOptions
      ) => UseFormRegisterReturn & { className: string };
    };
  }>;

  questionState?(prompt: Prompt, answer: Answer): State;

  getAnswerFromDOM?(
    data: { [key: string]: any },
    container: HTMLFormElement,
    prompt?: Prompt,
  ): Promise<UserAnswer>;

  AnswerView: React.FC<{ answer: UserAnswer; baseline: Answer; prompt: Prompt }>;

  compareAnswers?(providedAnswer: Answer, userAnswer: UserAnswer): number;

  validate?(prompt: Prompt, answer: Answer): boolean;
}
