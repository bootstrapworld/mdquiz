import { render, screen, waitFor } from "@testing-library/preact";
import user from "@testing-library/user-event";
import React from "react";
import { beforeEach, describe, expect, it } from "vitest";

import type { MultipleChoice } from "../src/questions/multiple-choice";
import type { Quiz } from "../src/components/quiz";
import type { TaggedAnswer } from "../src/questions/mod";
import {
  MultipleChoiceMethods,
  QuestionView,
  QuizConfigContext
} from "../src/lib";
import { submitButton } from "./utils";

describe("MultipleChoice", () => {
  const question: MultipleChoice & { type: "MultipleChoice" } = {
    type: "MultipleChoice",
    prompt: { prompt: "Hello world", distractors: ["B", "C"] },
    answer: { answer: "A" }
  };

  let submitted: TaggedAnswer | null = null;
  beforeEach(async () => {
    submitted = null;
    const state = MultipleChoiceMethods.questionState!(
      question.prompt,
      question.answer
    );
    render(
      <QuizConfigContext.Provider value={{ name: "Foobar", quiz: {} as Quiz }}>
        <QuestionView
          question={question}
          multipart={{}}
          title={"1"}
          index={1}
          attempt={0}
          onBack={() => {}}
          canGoBack={false}
          questionState={state}
          onSubmit={answer => {
            submitted = answer;
          }}
        />
      </QuizConfigContext.Provider>
    );
    await waitFor(() => screen.getByText("Hello world"));
  });

  it("initially renders", () => {});

  it("validates input", async () => {
    await user.click(submitButton());
    expect(submitted).toBe(null);
  });

  it("accepts valid input", async () => {
    const input = screen.getByRole("radio", { name: "A" });
    await user.click(input);
    await user.click(submitButton());
    expect(submitted).toMatchObject({
      answer: { answer: "A" },
      correct: 1
    });
  });
});

describe("MultipleChoice multi-answer", () => {
  const question: MultipleChoice & { type: "MultipleChoice" } = {
    type: "MultipleChoice",
    prompt: { prompt: "Hello world", distractors: ["C", "D"] },
    answer: { answer: ["A", "B"] }
  };

  let submitted: TaggedAnswer | null = null;
  beforeEach(async () => {
    submitted = null;
    const state = MultipleChoiceMethods.questionState!(
      question.prompt,
      question.answer
    );
    render(
      <QuizConfigContext.Provider value={{ name: "Foobar", quiz: {} as Quiz }}>
        <QuestionView
          question={question}
          multipart={{}}
          index={1}
          title="1"
          attempt={0}
          onBack={() => {}}
          canGoBack={false}
          questionState={state}
          onSubmit={answer => {
            submitted = answer;
          }}
        />
      </QuizConfigContext.Provider>
    );
    await waitFor(() => screen.getByText("Hello world"));
  });

  it("initially renders", () => {});

  it("validates input", async () => {
    await user.click(submitButton());
    expect(submitted).toBe(null);
  });

  it("accepts valid input", async () => {
    for (const name of ["A", "B"]) {
      const input = screen.getByRole("checkbox", { name });
      await user.click(input);
    }

    await user.click(submitButton());
    expect(submitted).toMatchObject({
      answer: { answer: ["A", "B"] },
      correct: 1
    });
  });
});
