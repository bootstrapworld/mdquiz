import { parse } from 'smol-toml'
import { type Quiz, QuizView } from "./lib";
import React from "react";
import ReactDOM from "react-dom/client";

import quizStr from "./quiz.toml?raw";
import "./telemetry";

declare global {
  interface Window {
      telemetry:any;
  }
}

const App = () => {
  const quiz = parse(quizStr) as any as Quiz;
  return (
    <div>
      <h1>Example quiz</h1>
      <QuizView name="Bootstrap - Assessment" quiz={quiz} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
