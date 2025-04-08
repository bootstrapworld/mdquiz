import { parse } from 'smol-toml'
import { type Quiz } from "./bindings/Quiz";
import "./telemetry";
import React from "react";
import ReactDOM from "react-dom/client";
import { QuizView } from "./components/quiz";


declare global {
  interface Window {
      telemetry:any;
  }
}

export * from "./questions/mod";
export * from "./components/quiz";
export * from "./components/snippet";
export { type Quiz } from "./bindings/Quiz";
export { React };
export { ReactDOM };
export const parseTOML = (tomlStr) => (parse(tomlStr) as any as Quiz)

export default function buildQuiz(rootNode, quizConfigStr) {
  let quizConfig;
  try {
    console.log('trying to parse quiz string as JSON');
    quizConfig = JSON.parse(quizConfigStr) as Quiz;
  } catch (e) {
    try { 
      console.log('trying to parse quiz string as TOML');
      quizConfig = parseTOML(quizConfigStr) as Quiz;
    } catch (e) {
      throw ('Could not parse quiz configuration:\n' + e);
    }
  }
  
  console.log('QuizConfig is:\n',quizConfig);
  const App = () => {
    return (
      <div>
        <QuizView name="Bootstrap - Assessment" quiz={quizConfig} />
      </div>
    );
  };

  ReactDOM.createRoot(document.getElementById("root")!).render(<App />);

}