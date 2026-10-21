import user from "@testing-library/user-event";
import { screen } from "@testing-library/preact";

export const startButton = () => screen.getByRole("button", { name: "Start Quiz" });
export const submitButton = () => screen.getByRole("button", { name: "Next" });
export const bugButton = () => screen.getByRole("button", { name: "🐞" });

// Fills in the participant-info form and starts the quiz.
export const beginQuiz = async () => {
  const [first, last] = await screen.findAllByRole("textbox");
  await user.type(first, "Ab");
  await user.type(last, "Cd");
  await user.selectOptions(screen.getByRole("combobox"), "1");
  await user.click(startButton());
};
