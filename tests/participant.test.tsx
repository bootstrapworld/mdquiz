import { render, screen, waitFor } from "@testing-library/preact";
import user from "@testing-library/user-event";
import React from "react";
import { type Mock, beforeEach, describe, expect, it, vi } from "vitest";

import type { Quiz } from "../src/components/quiz";
import { QuizView } from "../src/lib";
import { beginQuiz, startButton, submitButton } from "./utils";

const quiz: Quiz = {
  title: "Telemetry Quiz",
  questions: [
    { type: "ShortAnswer", prompt: { prompt: "First?" }, answer: { answer: "one" } },
    { type: "ShortAnswer", prompt: { prompt: "Second?" }, answer: { answer: "two" } }
  ]
};

const fill = async (first: string, last: string, day?: string) => {
  const [firstBox, lastBox] = await screen.findAllByRole("textbox");
  await user.type(firstBox, first);
  await user.type(lastBox, last);
  if (day) await user.selectOptions(screen.getByRole("combobox"), day);
  return [firstBox as HTMLInputElement, lastBox as HTMLInputElement];
};

describe("Participant info", () => {
  beforeEach(async () => {
    render(<QuizView name="the-quiz" quiz={quiz} />);
  });

  it("keeps Start disabled until all three fields are filled", async () => {
    await fill("Ab", "Cd");
    expect(startButton()).toHaveProperty("disabled", true);
    await user.selectOptions(screen.getByRole("combobox"), "7");
    expect(startButton()).toHaveProperty("disabled", false);
  });

  it("uppercases, drops non-letters, and caps at two letters", async () => {
    const [first, last] = await fill("a1", "d-", "3");
    expect(first.value).toBe("A");
    expect(last.value).toBe("D");

    await user.type(first, "bc");
    expect(first.value).toBe("AB");
  });
});

describe("Quiz telemetry and navigation", () => {
  let log: Mock<(payload: Record<string, unknown>) => void>;

  beforeEach(async () => {
    log = vi.fn<(payload: Record<string, unknown>) => void>();
    window.telemetry = {
      log,
      isValid: async () => ({ success: true, message: "" })
    };
    render(<QuizView name="the-quiz" quiz={quiz} />);
    await screen.findAllByRole("textbox");
  });

  it("logs the answers once with a participant code on completion", async () => {
    // participant_code = two letters + two letters + the last digit of the day
    await fill("ab", "cd", "13");
    await user.click(startButton());

    await user.type(await screen.findByRole("textbox"), "one");
    await user.click(submitButton());
    expect(log).not.toHaveBeenCalled();

    await user.type(await screen.findByRole("textbox"), "wrong");
    await user.click(submitButton());
    await waitFor(() => screen.getByText("Congratulations!"));

    expect(log).toHaveBeenCalledTimes(1);
    const payload = log.mock.calls[0][0] as { answers: { correct: number }[] };
    expect(payload).toMatchObject({
      type: "answers",
      quizName: "Telemetry Quiz",
      attempt: 0,
      participant_code: "ABCD3"
    });
    expect(payload.answers).toHaveLength(2);
    expect(payload.answers.map(a => a.correct)).toEqual([1, 0]);
  });

  it("Back is disabled on the first question and restores the previous answer", async () => {
    await fill("ab", "cd", "1");
    await user.click(startButton());

    const back = () => screen.getByRole("button", { name: "Back" });
    expect(back()).toHaveProperty("disabled", true);

    await user.type(await screen.findByRole("textbox"), "one");
    await user.click(submitButton());
    await screen.findByText("Second?");
    expect(back()).toHaveProperty("disabled", false);

    await user.click(back());
    await screen.findByText("First?");
    expect(screen.getByRole("textbox")).toHaveProperty("value", "one");
  });
});

describe("beginQuiz helper", () => {
  it("gets through the intro screen", async () => {
    render(<QuizView name="the-quiz" quiz={quiz} />);
    await beginQuiz();
    await screen.findByText("First?");
  });
});
