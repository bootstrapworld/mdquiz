import { parseTOML, type Quiz, QuizView } from "./lib";
import React from "react";
import ReactDOM from "react-dom/client";

import quizStr from "./quiz.toml?raw";

const App = () => {
  const quiz = parseTOML(quizStr) as Quiz;
  return (
    <div>
      <h1>Example quiz</h1>
      <QuizView name="Bootstrap - Assessment" quiz={quiz} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
