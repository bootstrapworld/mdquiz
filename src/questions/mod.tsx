import classNames from "classnames";
import isEqual from "fast-deep-equal";
import React, { useContext, useId, useMemo, useRef, useState } from "react";
import { type RegisterOptions, useForm } from "react-hook-form";

import type { Question } from "../bindings/Question";
import type { Quiz } from "../components/quiz";
import { MarkdownView } from "../components/markdown";
import { MoreInfo } from "../components/more-info";
import { QuizConfigContext, useCaptureMdbookShortcuts } from "../lib";
import { InformationalMethods } from "./informational";
import { MultipleChoiceMethods } from "./multiple-choice";
import { ShortAnswerMethods } from "./short-answer";
import { TracingMethods } from "./tracing";
import { CardSortMethods } from "./card-sort";
import { PyretMethods } from "./pyret";
import type { QuestionMethods } from "./types";

export { MultipleChoiceMethods } from "./multiple-choice";
export { ShortAnswerMethods } from "./short-answer";
export { TracingMethods } from "./tracing";
export { CardSortMethods } from "./card-sort";

const methodMapping = {
  ShortAnswer: ShortAnswerMethods,
  Tracing: TracingMethods,
  MultipleChoice: MultipleChoiceMethods,
  Informational: InformationalMethods,
  CardSort: CardSortMethods,
  Pyret : PyretMethods
};

export const getQuestionMethods = (
  type: Question["type"]
): QuestionMethods<any, any> => methodMapping[type];

const questionNameToCssClass = (name: string) => {
  const output = [];
  for (let i = 0; i < name.length; ++i) {
    if (i > 0 && name[i].match(/[A-Z]/)) {
      output.push("-");
    }

    output.push(name[i].toLowerCase());
  }
  return output.join("");
};

const BugReporter = ({
  quizName,
  question
}: {
  quizName: string;
  question: number;
}) => {
  const [show, setShow] = useState(false);

  // Disable mdbook shortcuts if the bug reporter is opened and we're not
  // fullscreen
  useCaptureMdbookShortcuts(show);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    const data = new FormData(event.target as any);
    const feedback = data.get("feedback")!.toString();
    window.telemetry!.log("bug", {
      quizName,
      question,
      feedback
    });
    event.preventDefault();
    setShow(false);
  };
  return (
    <div className="bug-report">
      <button
        type="button"
        title="Report a bug in this question"
        onClick={() => setShow(!show)}
      >
        🐞
      </button>
      {show && (
        <div className="reporter">
          <button
            type="button"
            className="close"
            onClick={() => setShow(false)}
          >
            ✕
          </button>
          <h3>Report a bug</h3>
          <p>
            If you found an issue in this question (e.g. a typo or an incorrect
            answer), please describe the issue and report it:
          </p>
          <form onSubmit={onSubmit}>
            <textarea name="feedback" aria-label="Bug feedback" />
            <input type="submit" aria-label="Submit bug feedback" />
          </form>
        </div>
      )}
    </div>
  );
};

export interface TaggedAnswer {
  answer: any;
  correct: boolean;
  start: number;
  end: number;
  explanation?: string;
}

const now = () => new Date().getTime();

const EXPLANATION_HELP = `
Normally, we only observe *whether* readers get a question correct or incorrect. 
This explanation helps us understand *why* a reader answers a particular way, so 
we can better improve the surrounding text.
`.trim();

interface QuestionViewProps {
  multipart: Quiz["multipart"];
  question: Question;
  index: number;
  title: string;
  attempt: number;
  questionState?: any;
  onSubmit: (answer: TaggedAnswer) => void;
}

interface MultipartContextProps {
  title: string;
  multipart: Quiz["multipart"];
  question: Question;
}

const MultipartContext = ({
  title,
  multipart,
  question
}: MultipartContextProps) => (
  <div className="multipart-context">
    <p>
      <strong>Question {title.substring(0, 1)} has multiple parts.</strong> The
      box below contains the shared context for each part.
    </p>
    <div className="multipart-context-content">
      <MarkdownView markdown={multipart[question.multipart]} />
    </div>
  </div>
);

export const QuestionView: React.FC<QuestionViewProps> = ({
  multipart,
  question,
  index,
  title,
  attempt,
  questionState,
  onSubmit
}) => {
  const { name: quizName, showBugReporter } = useContext(QuizConfigContext)!;
  const start = useMemo(now, [quizName, question, index]);
  const ref = useRef<HTMLFormElement>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const methods = getQuestionMethods(question.type);
  if (!methods) {
    return (
      <div>
        QUIZ FORMAT ERROR: unknown question type <code>{question.type}</code>
      </div>
    );
  }

  const formValidators = useForm();
  const required = (name: string, options?: RegisterOptions) => {
    const attrs = formValidators.register(name, { ...options, required: true });
    const className = classNames({
      error: formValidators.formState.errors[name]
    });
    return { ...attrs, className };
  };

  const questionClass = questionNameToCssClass(question.type);

  const submit = formValidators.handleSubmit(async data => {
    const answer = methods.getAnswerFromDOM
      ? await methods.getAnswerFromDOM(data, ref.current!, question.prompt)
      : data;
    const comparator = methods.compareAnswers || isEqual;
    const correct = comparator(question.answer, answer);
    onSubmit({
      answer,
      correct,
      start,
      end: now(),
      explanation: data.explanation
    });
  });

  const shouldPrompt = question.promptExplanation && attempt === 0;

  const explanationId = useId();

  return (
    <div className={classNames("question", questionClass)}>
      <div className="prompt">
        {question.type === "Informational" ? (
          <h4>This Page is Purely Informational</h4>
        ) : (
          <h4>Question {title}</h4>
        )}
        {question.multipart && (
          <MultipartContext
            question={question}
            multipart={multipart}
            title={title}
          />
        )}
        <methods.PromptView prompt={question.prompt} image={question.image} />
        {window.telemetry && showBugReporter && (
          <BugReporter quizName={quizName} question={index} />
        )}
      </div>
      <form className="response" ref={ref} onSubmit={submit}>
        {question.type !== "Informational" ? (
          <>
            <h4>Response</h4>
            <fieldset disabled={showExplanation}>
              <methods.ResponseView
                key={`${quizName}-question${index}`}
                prompt={question.prompt}
                answer={question.answer}
                submit={submit}
                state={questionState}
                formValidators={{ ...formValidators, required }}
              />
            </fieldset>
          </>
        ) : (<></>)}
        {showExplanation && (
          <>
            <p>
              <br />
              <label htmlFor={explanationId}>
                In 1-2 sentences, please explain why you picked this answer.
                &nbsp;&nbsp;
                <MoreInfo markdown={EXPLANATION_HELP} />
              </label>
            </p>
            <textarea
              id={explanationId}
              title="Explanation"
              {...required("explanation")}
            />
          </>
        )}
        {shouldPrompt && !showExplanation ? (
          <button type="button" onClick={() => setShowExplanation(true)}>
            Submit
          </button>
        ) : (
          <input
            type="submit"
            value={question.type === "Informational" ? "Continue" : "Submit"}
          />
        )}
      </form>
    </div>
  );
};

interface AnswerViewProps {
  quizName: string;
  multipart: Quiz["multipart"];
  question: Question;
  index: number;
  title: string;
  userAnswer: Question["answer"];
  correct: boolean;
  showCorrect: boolean;
}

export const AnswerView: React.FC<AnswerViewProps> = ({
  multipart,
  question,
  index,
  title,
  userAnswer,
  correct,
  showCorrect
}) => {
  const { name: quizName, showBugReporter } = useContext(QuizConfigContext)!;
  const methods = getQuestionMethods(question.type);
  const questionClass = questionNameToCssClass(question.type);

  let multipartView = null;
  if (question.multipart) {
    const anchorId = `${quizName}-${question.multipart}`;
    if (title.substring(1, 2) === "a")
      multipartView = (
        <div>
          {/* biome-ignore lint/a11y/useAnchorContent: TODO */}
          <a id={anchorId} />
          <MultipartContext
            question={question}
            multipart={multipart}
            title={title}
          />
        </div>
      );
    else
      multipartView = (
        <div className="multipart-context">
          <a href={`#${anchorId}`}>
            Return to question context <span className="rotate-arrow">↳</span>
          </a>
        </div>
      );
  }

  return (
    <div className={classNames("answer", questionClass)}>
      <div className="prompt">
        <h4>Question {title}</h4>
        {multipartView}
        <methods.PromptView prompt={question.prompt} image={question.image} />
        {window.telemetry && showBugReporter && (
          <BugReporter quizName={quizName} question={index} />
        )}
      </div>
      <div className="answer-row">
        <div>
          <div className="answer-header">You answered:</div>
          <div>
            <methods.AnswerView
              answer={userAnswer}
              baseline={question.answer}
              prompt={question.prompt}
            />
          </div>
        </div>
        {showCorrect && !correct && (
          <div>
            <div className="answer-header">The correct answer is:</div>
            <div>
              <methods.AnswerView
                answer={question.answer}
                baseline={question.answer}
                prompt={question.prompt}
              />
            </div>
          </div>
        )}
      </div>
      {showCorrect && question.context && (
        <div className="context">
          <MarkdownView markdown={`**Context**:\n${question.context}`} />
        </div>
      )}
    </div>
  );
};
