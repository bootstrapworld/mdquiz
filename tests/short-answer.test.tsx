import { render, screen, waitFor } from "@testing-library/preact";
import user from "@testing-library/user-event";
import React from "react";
import { beforeEach, describe, expect, it } from "vitest";

import type { ShortAnswer } from "../src/questions/short-answer";
import { QuestionView, QuizConfigContext } from "../src/lib";
import type { Quiz } from "../src/components/quiz";
import type { TaggedAnswer } from "../src/questions/mod";
import { submitButton } from "./utils";

describe("ShortAnswer", () => {
  const question: ShortAnswer & { type: "ShortAnswer" } = {
    type: "ShortAnswer",
    prompt: { prompt: "Hello world" },
    answer: { answer: "Yes", alternatives: ["Ok"] }
  };

  let submitted: TaggedAnswer | null = null;
  beforeEach(async () => {
    submitted = null;
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
    const input = screen.getByRole("textbox");
    await user.type(input, "yEs ");
    await user.click(submitButton());
    // answers should be case-insensitive and trim whitespace
    expect(submitted).toMatchObject({
      answer: { answer: "yEs " },
      correct: 1
    });
  });

  it("accepts alternatives", async () => {
    const input = screen.getByRole("textbox");
    await user.type(input, "Ok");
    await user.click(submitButton());
    expect(submitted).toMatchObject({
      answer: { answer: "Ok" },
      correct: 1
    });
  });
});
