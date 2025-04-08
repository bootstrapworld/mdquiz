import buildQuiz, { React, ReactDOM, parseTOML, type Quiz, QuizView } from "./src/lib";

import quizStrTOML from "./quiz.toml?raw";
import quizStr from "./quiz.json?raw";
import quizStr2 from "./quiz-multipart.json?raw";
import quizStr3 from "./quiz-cardsort.json?raw";

//const quizConfig = quizStrTOML;
//const quizConfig = quizStr;
//const quizConfig = quizStr2;
const quizConfig = quizStr3;
buildQuiz("root", quizStr3);