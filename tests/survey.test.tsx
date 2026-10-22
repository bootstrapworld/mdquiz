import { render, screen, waitFor } from "@testing-library/preact";
import user from "@testing-library/user-event";
import React from "react";
import { describe, expect, it } from "vitest";

import type { MultipleChoice } from "../src/questions/multiple-choice";
import type { Quiz } from "../src/components/quiz";
import type { TaggedAnswer } from "../src/questions/mod";
import { MultipleChoiceMethods, QuestionView, QuizConfigContext, QuizView } from "../src/lib";
import { beginQuiz, submitButton } from "./utils";

const renderQuestion = (question: MultipleChoice & { type: "MultipleChoice" }) => {
  let submitted: TaggedAnswer | null = null;
  render(
    <QuizConfigContext.Provider value={{ name: "Survey", quiz: {} as Quiz }}>
      <QuestionView
        question={question}
        questionState={MultipleChoiceMethods.questionState!(question.prompt, question.answer)}
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
  return () => submitted;
};

describe("Keyless MultipleChoice (survey)", () => {
  it("renders radio buttons by default and accepts any choice", async () => {
    const submitted = renderQuestion({
      type: "MultipleChoice",
      prompt: { prompt: "How confident are you?", distractors: ["Low", "Medium", "High"] }
    });
    await screen.findByText("How confident are you?");
    expect(screen.getAllByRole("radio")).toHaveLength(3);

    await user.click(submitButton());
    expect(submitted()).toBe(null); // still has to pick one

    await user.click(screen.getByRole("radio", { name: "Medium" }));
    await user.click(submitButton());
    expect(submitted()).toMatchObject({ answer: { answer: "Medium" }, correct: 1 });
  });

  it("renders checkboxes with multiSelect", async () => {
    const submitted = renderQuestion({
      type: "MultipleChoice",
      prompt: { prompt: "What helped?", distractors: ["Videos", "Pairing", "Notes"], multiSelect: true }
    });
    await screen.findByText("What helped?");
    expect(screen.getAllByRole("checkbox")).toHaveLength(3);

    await user.click(submitButton());
    expect(submitted()).toBe(null); // at least one

    await user.click(screen.getByRole("checkbox", { name: "Videos" }));
    await user.click(screen.getByRole("checkbox", { name: "Notes" }));
    await user.click(submitButton());
    expect(submitted()).toMatchObject({ answer: { answer: ["Notes", "Videos"] }, correct: 1 });
  });

  it("never offers a retry or shows a correct answer", async () => {
    const quiz: Quiz = {
      questions: [
        { type: "MultipleChoice", prompt: { prompt: "Rate it", distractors: ["1", "2"] } } as Quiz["questions"][number],
        { type: "ShortAnswer", prompt: { prompt: "Thoughts?" } } as Quiz["questions"][number]
      ]
    };
    render(<QuizView name="survey" quiz={quiz} allowRetry />);
    await beginQuiz();

    await user.click(await screen.findByRole("radio", { name: "2" }));
    await user.click(submitButton());
    await user.type(await screen.findByRole("textbox"), "fine");
    await user.click(submitButton());

    await waitFor(() => screen.getByText("Congratulations!"));
    expect(screen.queryByRole("button", { name: "Retry missed questions" })).toBeNull();
  });
});
