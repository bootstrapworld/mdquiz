import { render, screen, waitFor } from "@testing-library/preact";
import user from "@testing-library/user-event";
import React from "react";
import { beforeEach, describe, expect, it } from "vitest";

import type { Question } from "../src/bindings/Question";
import type { Quiz } from "../src/components/quiz";
import { QuizView, generateQuestionTitles } from "../src/lib";
import { beginQuiz, startButton, submitButton } from "./utils";

const quiz: Quiz = {
  questions: [
    {
      type: "ShortAnswer",
      prompt: { prompt: "Hey" },
      answer: { answer: "Yes" }
    }
  ]
};

describe("Quiz", () => {
  beforeEach(async () => {
    render(<QuizView name="the-quiz" quiz={quiz} />);
    await waitFor(() => screen.getByText("Quiz"));
  });

  it("initially renders", () => {});

  it("starts after click", async () => {
    await beginQuiz();
    await waitFor(() => screen.getByText(/^Question 1 \//));
  });

  it("shows you answers after completion", async () => {
    await beginQuiz();
    const input = await waitFor(() => screen.getByRole("textbox"));
    await user.type(input, "No");
    await user.click(submitButton());
    await waitFor(() => screen.getByText("Congratulations!"));
  });
});

describe("Quiz configuration", () => {
  it("can cache answers", async () => {
    const { rerender } = render(
      <QuizView key={0} name="the-quiz" quiz={quiz} cacheAnswers={true} />
    );
    await waitFor(() => screen.getByText("Quiz"));
    await beginQuiz();
    await waitFor(() => screen.getByText(/^Question 1 \//));
    const input = await waitFor(() => screen.getByRole("textbox"));
    await user.type(input, "No");
    await user.click(submitButton());
    await waitFor(() => screen.getByText("Congratulations!"));

    // After rerendering the component, we should still be at the end
    rerender(
      <QuizView key={1} name="the-quiz" quiz={quiz} cacheAnswers={true} />
    );
    await waitFor(() => screen.getByText("Congratulations!"));

    // But if the quiz changes, then the answers should be invalidated
    const newQuiz = { questions: [...quiz.questions, ...quiz.questions] };
    rerender(
      <QuizView key={2} name="the-quiz" quiz={newQuiz} cacheAnswers={true} />
    );
    await waitFor(() => startButton());
  });
});

describe("Quiz retry", () => {
  const longQuiz: Quiz = {
    questions: [
      {
        type: "ShortAnswer",
        prompt: { prompt: "Hey" },
        answer: { answer: "Yes" }
      },
      {
        type: "ShortAnswer",
        prompt: { prompt: "Hello" },
        answer: { answer: "No" }
      }
    ]
  };

  beforeEach(async () => {
    render(<QuizView name="the-quiz" quiz={longQuiz} allowRetry />);
    await waitFor(() => screen.getByText("Quiz"));
    await beginQuiz();
    await waitFor(() => screen.getByText(/^Question 1 \//));

    let input = await waitFor(() => screen.getByRole("textbox"));
    await user.type(input, "Yes");
    await user.click(submitButton());

    input = await waitFor(() => screen.getByRole("textbox"));
    await user.type(input, "Yes");
    await user.click(submitButton());
  });

  it("allow for retrying after an incorrect answer", async () => {
    const retryButton = screen.getAllByRole("button", { name: "Retry missed questions" });
    await user.click(retryButton[0]);

    // Skips first question, only shows the second
    await waitFor(() => screen.getByText("Hello"));

    // Provide a correct answer...
    // (the previous, wrong answer is restored in the field, so clear it first)
    const input = await waitFor(() => screen.getByRole("textbox"));
    await user.clear(input);
    await user.type(input, "No");
    await user.click(submitButton());

    // ...and button should disappear.
    await waitFor(() =>
      expect(
        screen.queryByRole("button", { name: "Retry missed questions" })
      ).toBeNull()
    );
  });
});

describe("generateQuestionTitles", () => {
  it("handles multi-part questions", () => {
    const template: Question = {
      type: "ShortAnswer",
      prompt: { prompt: "" },
      answer: { answer: "" }
    };
    const questions: Question[] = [
      { ...template, multipart: "a" },
      { ...template, multipart: "a" },
      { ...template, multipart: "b" },
      { ...template },
      { ...template, multipart: "c" }
    ];
    expect(generateQuestionTitles({ questions })).toStrictEqual([
      "1a",
      "1b",
      "2a",
      "3",
      "4a"
    ]);
  });
});
