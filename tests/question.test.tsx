import { render, screen, waitFor } from "@testing-library/preact";
import user from "@testing-library/user-event";
import React from "react";
import { beforeEach, describe, expect, it } from "vitest";

import type { Question } from "../src/bindings/Question";
import { QuestionView, QuizConfigContext } from "../src/lib";
import type { Quiz } from "../src/components/quiz";
import type { TaggedAnswer } from "../src/questions/mod";
import { submitButton } from "./utils";

describe("Question prompt for explanation", () => {
  const question: Question = {
    type: "ShortAnswer",
    prompt: { prompt: "Hello world" },
    answer: { answer: "Yes" },
    promptExplanation: true
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

  it("accepts an explanation", async () => {
    let input = screen.getByRole("textbox");
    await user.type(input, "No");
    // with promptExplanation, the first button only reveals the explanation box
    await user.click(screen.getByRole("button", { name: "Submit" }));

    input = screen.getByTitle("Explanation");
    await user.type(input, "Because");
    await user.click(submitButton());

    expect(submitted.answer).toMatchObject({ explanation: "Because" });
  });
});
