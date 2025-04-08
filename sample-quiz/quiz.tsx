import { React, ReactDOM, parseTOML, type Quiz, QuizView } from "../dist/mdquiz";

import quizStr from "./quiz.toml?raw";
import quizJSON from "./quiz.json?raw";
import quizJSON2 from "./quiz-multipart.json?raw";
import quizJSON3 from "./quiz-cardsort.json?raw";

const App = () => {
  //const quiz = parseTOML(quizStr) as Quiz;
  const quiz = JSON.parse(quizJSON3) as Quiz;
  //console.log(JSON.stringify(quiz, null, 2));
  return (
    <div>
      <QuizView name="Bootstrap - Assessment" quiz={quiz} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
