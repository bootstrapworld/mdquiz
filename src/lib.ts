import { parse } from 'smol-toml'
import { type Quiz } from "./bindings/Quiz";
import "./telemetry";

declare global {
  interface Window {
      telemetry:any;
  }
}

export * from "./questions/mod";
export * from "./components/quiz";
export * from "./components/snippet";
export { type Quiz } from "./bindings/Quiz";
export const parseTOML = (tomlStr) => (parse(tomlStr) as any as Quiz)

