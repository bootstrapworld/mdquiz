import classNames from "classnames";
import { makeAutoObservable, toJS } from "mobx";
import { observer, useLocalObservable } from "mobx-react";
import hash from "object-hash";
import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from "react";

import {
  QuestionView,
  type TaggedAnswer,
  getQuestionMethods
} from "../questions/mod";

import type { Question, Markdown } from "../bindings/Question";

/* -------------------------------- Types ------------------------------- */

export type Quiz = {
  title?: string,
  questions: Array<Question>,
  multipart?: Record<string, Markdown>,
}

interface StoredAnswers {
  answers: TaggedAnswer[];
  confirmedDone: boolean;
  quizHash: string;
  attempt: number;
  wrongAnswers?: number[];
  participant_code: string;
}

declare global {
  interface Window {
    telemetry?: {
      log: (payload: any) => void;
      isValid: () => Promise<{ success: boolean; message: string }>;
    };
  }
}

/* ------------------------------- Storage ------------------------------ */

class AnswerStorage {
  constructor(readonly quizName: string, readonly quizHash: string) {}

  private storageKey = () => `quiz:${this.quizName}`;

  save(data: Omit<StoredAnswers, 'quizHash'>) {
    const payload: StoredAnswers = { ...data, quizHash: this.quizHash };
    localStorage.setItem(this.storageKey(), JSON.stringify(payload));
  }

  load(): StoredAnswers | undefined {
    const json = localStorage.getItem(this.storageKey());
    if (!json) return undefined;
    const stored: StoredAnswers = JSON.parse(json);
    return stored.quizHash === this.quizHash ? stored : undefined;
  }
}

/* -------------------------------- Store ------------------------------- */

class QuizStore {
  started = false;
  index = 0;
  participant_code = "";
  attempt = 0;
  answers: TaggedAnswer[] = [];
  wrongAnswers?: number[] = [];
  confirmedDone = false;

  constructor(
    private config: QuizViewConfig,
    private storage: AnswerStorage,
    private quizHash: string
  ) {
    makeAutoObservable(this);
    this.init();
  }

  private init() {
    const stored = this.storage.load();
    // Logic to handle potential schema updates or missing retry data
    const badSchema = stored && stored.attempt > 0 && !stored.confirmedDone && !stored.wrongAnswers;

    if (this.config.cacheAnswers && stored && !badSchema) {
      this.started = true;
      this.index = this.config.quiz.questions.length;
      this.answers = stored.answers;
      this.confirmedDone = stored.confirmedDone;
      this.attempt = stored.attempt;
      this.participant_code = stored.participant_code || "";
      this.wrongAnswers = stored.wrongAnswers ||
        (stored.attempt > 0 ? this.config.quiz.questions.map((_, i) => i) : undefined);
    } else if (this.config.autoStart) {
      this.started = true;
    }
  }

  // Derived Values (MobX Computeds)
  get isEnded() {
    return this.index === this.config.quiz.questions.length;
  }

  get encounteredInfos() {
    return this.config.quiz.questions
      .slice(0, this.index)
      .filter(q => q.type === "Informational").length;
  }

  // Actions
  start = () => {
    this.started = true;
  };

  submitAnswer = (answer: TaggedAnswer) => {
    const currentAnswer = structuredClone(answer);

    if (this.attempt === 0) {
      this.answers.push(currentAnswer);
      this.index++;
    } else {
      this.answers[this.index] = currentAnswer;
      const currentRetryList = this.wrongAnswers || [];
      const currentPos = currentRetryList.indexOf(this.index);

      if (currentPos === currentRetryList.length - 1 || currentPos === -1) {
        this.index = this.config.quiz.questions.length;
      } else {
        this.index = currentRetryList[currentPos + 1];
      }
    }

    if (this.isEnded) {
      this.handleQuizCompletion();
    }
  };

  private handleQuizCompletion() {
    window.telemetry?.log({
      type: "answers",
      quizName: this.config.quiz.title,
      quizHash: this.quizHash,
      questions: this.config.quiz.questions,
      answers: toJS(this.answers),
      attempt: this.attempt,
      participant_code: this.participant_code,
    });

    const wrong = this.answers
      .map((a, i) => ({ a, i }))
      .filter(({ a }) => a.correct < 1);

    if (wrong.length === 0 || !this.config.allowRetry) {
      this.confirmedDone = true;
    } else {
      this.wrongAnswers = wrong.map(({ i }) => i);
    }

    if (this.config.cacheAnswers) {
      this.storage.save({
        answers: toJS(this.answers),
        confirmedDone: this.confirmedDone,
        attempt: this.attempt,
        wrongAnswers: this.wrongAnswers,
        participant_code: this.participant_code
      });
    }
  }

  retry = () => {
    if (this.wrongAnswers && this.wrongAnswers.length > 0) {
      this.index = this.wrongAnswers[0];
      this.attempt++;
    }
  };

  giveUp = () => {
    this.confirmedDone = true;
    if (this.config.cacheAnswers) {
      this.storage.save({
        answers: toJS(this.answers),
        confirmedDone: true,
        attempt: this.attempt,
        wrongAnswers: this.wrongAnswers,
        participant_code: this.participant_code
      });
    }
  };

  exit = () => {
    this.started = false;
    this.index = 0;
    this.answers = [];
    this.attempt = 0;
  };
}

/* ------------------------------ Components ---------------------------- */

const Header = observer(({ store }: { store: QuizStore }) => {
  const { quiz } = useContext(QuizConfigContext)!;

  const totalQuestions = useMemo(() =>
    quiz.questions.filter(q => q.type !== "Informational").length,
  [quiz]);

  const isInformational = quiz.questions[store.index]?.type === "Informational";

  const currentQuestionDisplay = useMemo(() => {
    if (store.attempt === 0) return store.index + 1 - store.encounteredInfos;
    return (store.wrongAnswers?.indexOf(store.index) ?? 0) + 1;
  }, [store.index, store.attempt, store.encounteredInfos, store.wrongAnswers]);

  const totalToComplete = store.attempt === 0 ? totalQuestions : (store.wrongAnswers?.length ?? 0);

  return (
    <header className={classNames({
      "started": store.started,
      "ended": store.isEnded,
      "title": !store.started && !store.isEnded
    })}>
      <img src="https://bootstrapworld.org/images/bootstrap-logo-light.webp" id="logo" alt="Logo" />
      <h3>Show What You Know</h3>
      <h4>{quiz.title || "Quiz"}</h4>

      <div className="counter">
        {store.started && !store.isEnded && !isInformational && (
          <>Question {currentQuestionDisplay} / {totalToComplete}</>
        )}
        {!store.started && !store.isEnded && (
          <>{totalQuestions} question{totalQuestions !== 1 ? "s" : ""}</>
        )}
      </div>
    </header>
  );
});

const AnswerReview = observer(({ store }: { store: QuizStore }) => {
  return (
    <section className="answer-review">
      <h3>Congratulations!</h3>
      <h3>You've completed all of the assigned questions.</h3>
      {!store.confirmedDone && store.wrongAnswers && store.wrongAnswers.length > 0 && (
        <div style={{ marginTop: "1em" }}>
          <p>You have some incorrect answers. Would you like to try again?</p>
          <button type="button" onClick={store.retry}>Retry missed questions</button>
          {" or "}
          <button type="button" onClick={store.giveUp}>See correct answers</button>
        </div>
      )}
    </section>
  );
});

/* ----------------------------- Main View ------------------------------ */

export interface QuizViewConfig {
  name: string;
  quiz: Quiz;
  fullscreen?: boolean;
  cacheAnswers?: boolean;
  allowRetry?: boolean;
  showBugReporter?: boolean;
  autoStart?: boolean;
}

export type QuizViewProps = QuizViewConfig & {
  onFinish?: (answers: TaggedAnswer[]) => void;
};

export const QuizConfigContext = React.createContext<QuizViewConfig | null>(null);

export const QuizView: React.FC<QuizViewProps> = observer(({ onFinish, ...config }) => {
  const quizHash = useMemo(() => hash.MD5(config.quiz), [config.quiz]);
  const storage = useMemo(() => new AnswerStorage(config.name, quizHash), [config.name, quizHash]);

  // Store handles its own initialization and data loading
  const store = useLocalObservable(() => new QuizStore(config, storage, quizHash));

  // Report results to parent
  useEffect(() => {
    if (store.isEnded) onFinish?.(toJS(store.answers));
  }, [store.isEnded, store.answers, onFinish]);

  const questionTitles = useMemo(() => generateQuestionTitles(config.quiz), [config.quiz]);

  const questionStates = useMemo(() =>
    config.quiz.questions.map(q => {
      if (!q.id) q.id = hash.MD5(q);
      return getQuestionMethods(q.type).questionState?.(q.prompt, q.answer);
    }),
  [config.quiz]);

  const [isValid, setIsValid] = useState<{ success: boolean; message: string } | null>(null);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      const isLocalhost = ["localhost", "127.0.0.1"].includes(window.location.hostname);
      const result = await window.telemetry?.isValid();
      if (isMounted && result) {
        setIsValid({
          success: result.success || isLocalhost,
          message: result.message
        });
      }
    })();
    return () => { isMounted = false; };
  }, []);

  const inProgress = store.started && !store.isEnded;
  useCaptureMdbookShortcuts(inProgress);

  const [lastTop, setLastTop] = useState<number | undefined>();
  const showFullscreen = inProgress && (config.fullscreen ?? false);

  useLayoutEffect(() => {
    document.body.style.overflowY = showFullscreen ? "hidden" : "auto";
    if (showFullscreen) {
      setLastTop(window.scrollY + 100);
    } else if (config.fullscreen && lastTop !== undefined) {
      window.scrollTo(0, lastTop);
    }
  }, [showFullscreen, config.fullscreen, lastTop]);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const body = (
    <section className="quiz-body">
      {store.started ? (
        store.isEnded ? (
          <AnswerReview store={store} />
        ) : (
          <QuestionView
            key={store.index}
            multipart={config.quiz.multipart}
            index={store.index}
            title={questionTitles[store.index]}
            attempt={store.attempt}
            question={config.quiz.questions[store.index]}
            questionState={questionStates[store.index]}
            onSubmit={store.submitAnswer}
          />
        )
      ) : (
        <div className="quiz-intro">
          <p>Please enter your ID to begin the quiz:</p>
          <input
            type="text"
            placeholder="Your ID"
            value={store.participant_code}
            onChange={(e) => (store.participant_code = e.target.value)}
          />
          <br/>
          <button
            type="button"
            className="start"
            onClick={store.start}
            disabled={store.participant_code.trim().length < 4}
          >
            Start Quiz
          </button>
        </div>
      )}
    </section>
  );

  return (
    <QuizConfigContext.Provider value={config}>
      <div ref={wrapperRef} className={classNames("mdbook-quiz-wrapper", { expanded: showFullscreen })}>
        <div className="mdbook-quiz">
          {showFullscreen && (
            <>
              <div className="exit" onClick={store.exit} title="Exit Quiz">✕</div>
              <ExitExplanation wrapperRef={wrapperRef} />
            </>
          )}
          <Header store={store} />
          {isValid == null ? (
            <div className="loading">Checking quiz status...</div>
          ) : isValid.success ? (
            body
          ) : (
            <div className="error">{isValid.message}</div>
          )}
        </div>
      </div>
    </QuizConfigContext.Provider>
  );
});

/* ---------------------------- Helpers ------------------------- */

const ExitExplanation = ({ wrapperRef }: { wrapperRef: React.RefObject<HTMLDivElement> }) => {
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    if (expanded) {
      wrapperRef.current?.scrollTo({
        top: wrapperRef.current.offsetHeight,
        behavior: "smooth"
      });
    }
  }, [expanded, wrapperRef]);

  return (
    <div className="exit-explanation">
      <div className="trigger" onClick={() => setExpanded(!expanded)}>
        Why is this quiz fullscreen?
      </div>
      {expanded && (
        <div className="explanation-content">
          We want to know how much you are learning that can be recalled without
          assistance. Please complete the quiz without re-reading the text.
        </div>
      )}
    </div>
  );
};

export const useCaptureMdbookShortcuts = (capture: boolean) => {
  useLayoutEffect(() => {
    if (capture) {
      const captureKeyboard = (e: KeyboardEvent) => e.stopPropagation();
      const captureTouchscreen = (e: TouchEvent) => {
        e.preventDefault();
        e.stopPropagation();
      };

      document.documentElement.addEventListener("keydown", captureKeyboard, false);
      document.documentElement.addEventListener("touchmove", captureTouchscreen, { passive: false });

      return () => {
        document.documentElement.removeEventListener("keydown", captureKeyboard, false);
        document.documentElement.removeEventListener("touchmove", captureTouchscreen);
      };
    }
  }, [capture]);
};

const aCode = "a".charCodeAt(0);
export const generateQuestionTitles = (quiz: Quiz): string[] => {
  const groups: Question[][] = [];
  let group: Question[] = [];
  let lastPart: Markdown | undefined = undefined;

  quiz.questions.forEach(q => {
    if (q.multipart) {
      if (q.multipart === lastPart) {
        group.push(q);
      } else {
        group = [q];
        groups.push(group);
      }
      lastPart = q.multipart;
    } else {
      group = [q];
      groups.push(group);
      lastPart = undefined;
    }
  });

  return groups.flatMap((g, i) =>
    g.map((q, j) => {
      let title = (i + 1).toString();
      if (q.multipart) title += String.fromCharCode(aCode + j);
      return title;
    })
  );
};