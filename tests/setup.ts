import { cleanup } from "@testing-library/preact";
import { afterEach, beforeEach } from "vitest";

// Polyfill for necessary global used by Monaco
document.queryCommandSupported = () => false;

afterEach(() => {
  cleanup();
});

// QuizView asks the host page's telemetry hook whether the quiz is valid
// before it shows anything. src/telemetry.ts installs a real one on import,
// so replace it before each test.
beforeEach(() => {
  window.telemetry = {
    log: () => {},
    isValid: async () => ({ success: true, message: "" })
  };
});
