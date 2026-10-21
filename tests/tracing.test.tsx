import { render, screen, waitFor } from "@testing-library/preact";
import user from "@testing-library/user-event";
import React from "react";
import { beforeEach, describe, expect, it } from "vitest";

import type { Tracing } from "../src/questions/tracing";
import { QuestionView, QuizConfigContext } from "../src/lib";
import type { Quiz } from "../src/components/quiz";
import type { TaggedAnswer } from "../src/questions/mod";
import { submitButton } from "./utils";

describe("Tracing", () => {
  const question: Tracing & { type: "Tracing" } = {
    type: "Tracing",
    prompt: { program: "fn main(){}" },
    answer: { doesCompile: true, stdout: "Yes" }
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
    await waitFor(() => screen.getByText(/Determine whether the program will pass/));
  });

  it("initially renders", () => {});

  const getCheckbox = () =>
    screen.getByRole("radio", {
      name: "DOES compile"
    });

  it("validates input", async () => {
    await user.click(submitButton());
    expect(submitted).toBe(null);

    const checkbox = getCheckbox();
    await user.click(checkbox);
    await user.click(submitButton());
    expect(submitted).toBe(null);
  });

  it("accepts valid input", async () => {
    const checkbox = getCheckbox();
    await user.click(checkbox);

    const input = screen.getByRole("textbox");
    await user.type(input, "Yes ");
    await user.click(submitButton());

    expect(submitted).toMatchObject({
      answer: { doesCompile: true, stdout: "Yes " },
      correct: 1
    });
  });

  it("rejects fully invalid input", async () => {
    const checkbox = screen.getByRole("radio", {
      name: "does NOT compile"
    });

    await user.click(checkbox);

    // let input = screen.getByRole("combobox");
    // await user.selectOptions(input, "1");
    await user.click(submitButton());

    expect(submitted).toMatchObject({
      answer: { doesCompile: false /* lineNumber: 1 */ },
      correct: 0
    });
  });

  it("rejects partially invalid input", async () => {
    const checkbox = getCheckbox();
    await user.click(checkbox);

    const input = screen.getByRole("textbox");
    await user.type(input, "No");
    await user.click(submitButton());

    expect(submitted).toMatchObject({
      answer: { doesCompile: true, stdout: "No" },
      correct: 0
    });
  });
});
