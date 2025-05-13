import "./telemetry";
import React from "react";
import ReactDOM from "react-dom/client";
import { QuizView } from "./components/quiz";
import type { Quiz } from "./components/quiz";
import { parse } from '@prantlf/jsonlint';



declare global {
  interface Window {
      telemetry:any;
  }
}

export * from "./questions/mod";
export * from "./components/quiz";
export * from "./components/snippet";
export { Quiz }
export { React };
export { ReactDOM };

export default function buildQuiz(rootNode, quizConfig) {
  const App = () => {

    if(typeof quizConfig !== "object") {
      try {
        quizConfig = parse(quizConfig) as unknown as Quiz;
      } catch (error) {
        const { message, reason, excerpt, pointer, location } = error
          const { column, line, offset } = location.start

        return (
          <div className="json-error">
            Could not parse quiz configuration! This is usually because of a JSON error:
            <p/>
            {`Parse error on line ${line}, column ${column}:`}
            <p/>
            {excerpt}
            <p/>
            {pointer}
            <p/>
            {reason}
          </div>
        );
      }
    }

    console.log('QuizConfig is:\n', quizConfig);
    return (
      <div>
        <QuizView name="Bootstrap - Assessment" quiz={quizConfig} />
      </div>
    );
  };

  ReactDOM.createRoot(document.getElementById("root")!).render(<App />);

}