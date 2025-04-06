import { React, ReactDOM, parseTOML, type Quiz, QuizView } from "../dist/mdquiz";

import quizStr from "./quiz.toml?raw";
import quizJSON from "./quiz.json?raw";

const App = () => {
  //const quiz = parseTOML(quizStr) as Quiz;
  const quiz = JSON.parse(quizJSON) as Quiz;
  return (
    <div>
      <h1>Example quiz</h1>
      <QuizView name="Bootstrap - Assessment" quiz={quiz} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
