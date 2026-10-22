import { describe, expect, it } from "vitest";

import { CardSortMethods, type Card } from "../src/questions/card-sort";
import { CategorizeMethods } from "../src/questions/categorize";
import { MultipleChoiceMethods } from "../src/questions/multiple-choice";
import { ShortAnswerMethods } from "../src/questions/short-answer";

// Build the card tree the sorting UI submits: the first id of each group is the
// top-level card, and the rest are stacked on it as children.
const tree = (groups: string[][]): Card[] =>
  groups.map(([head, ...rest], i) => ({
    id: head,
    content: head,
    left: i * 10,
    top: 0,
    children: rest.map(id => ({ id, content: id, children: [] }))
  }));

describe("CardSort scoring", () => {
  const key = {
    answer: [["a", "b"], ["c", "d"]],
    ordered: false
  };
  const score = (user: Parameters<typeof CardSortMethods.compareAnswers>[1]) =>
    CardSortMethods.compareAnswers!(key, user);

  it("gives full credit for the authored shape", () => {
    expect(score({ answer: [["a", "b"], ["c", "d"]], ordered: false })).toBe(1);
  });

  it("ignores group order and order within a group", () => {
    expect(score({ answer: [["d", "c"], ["b", "a"]], ordered: false })).toBe(1);
  });

  it("gives full credit for a correct card tree", () => {
    expect(score({ answer: tree([["a", "b"], ["c", "d"]]) })).toBe(1);
  });

  it("scores a card tree whose cards are nested more than one level deep", () => {
    const nested: Card[] = [
      { id: "a", content: "a", children: [{ id: "b", content: "b", children: [] }] },
      { id: "c", content: "c", children: [{ id: "d", content: "d", children: [] }] }
    ];
    expect(score({ answer: nested })).toBe(1);

    // a stacked onto b stacked onto c
    const deep: Card[] = [
      {
        id: "a",
        content: "a",
        children: [
          { id: "b", content: "b", children: [{ id: "c", content: "c", children: [] }] }
        ]
      },
      { id: "d", content: "d", children: [] }
    ];
    // pairs a-b, a-c, b-c vs. key pairs a-b, c-d => 1 shared of 4 total
    expect(score({ answer: deep })).toBeCloseTo(1 / 4);
  });

  it("gives partial credit by the share of correct card pairs", () => {
    // only a-b is kept together: 1 shared pair / 2 key pairs
    expect(score({ answer: tree([["a", "b"], ["c"], ["d"]]) })).toBeCloseTo(1 / 2);
    // c-d is kept, but a joins them: key pairs {ab, cd}, user pairs {ac, ad, cd}
    expect(score({ answer: tree([["a", "c", "d"], ["b"]]) })).toBeCloseTo(1 / 4);
  });

  it("gives no credit when every card is in the wrong group", () => {
    expect(score({ answer: tree([["a", "c"], ["b", "d"]]) })).toBe(0);
  });

  it("gives no credit when cards are left ungrouped", () => {
    expect(score({ answer: tree([["a"], ["b"], ["c"], ["d"]]) })).toBe(0);
  });

  it("gives no credit for missing or malformed answers", () => {
    expect(score(undefined as never)).toBe(0);
    expect(score({} as never)).toBe(0);
    expect(score({ answer: "oops" } as never)).toBe(0);
  });

  it("respects `ordered` when the key says order matters", () => {
    const ordered = { answer: [["a", "b", "c"]], ordered: true };
    expect(CardSortMethods.compareAnswers!(ordered, { answer: [["a", "b", "c"]], ordered: true })).toBe(1);
    expect(CardSortMethods.compareAnswers!(ordered, { answer: [["c", "b", "a"]], ordered: true })).toBeLessThan(1);
  });
});

describe("CardSort questionState", () => {
  it("keeps authored positions and fills in the rest", () => {
    const state = CardSortMethods.questionState!(
      {
        prompt: "",
        cards: [
          { id: "a", content: "A", left: 5, top: 7 },
          { id: "b", content: "B" }
        ]
      },
      { answer: [], ordered: false }
    );
    expect(state[0]).toMatchObject({ id: "a", left: 5, top: 7, children: [] });
    expect(state[1].children).toEqual([]);
    expect(typeof state[1].left).toBe("number");
    expect(typeof state[1].top).toBe("number");
  });
});

describe("Categorize scoring", () => {
  const key = { Skewed: ["a", "b"], Symmetric: ["c", "d"] };
  const score = (user: Record<string, string[]>) =>
    CategorizeMethods.compareAnswers!(key, user);

  it("gives full credit for the right buckets", () => {
    expect(score({ Skewed: ["a", "b"], Symmetric: ["c", "d"] })).toBe(1);
  });

  it("does not depend on the order buckets were filled in", () => {
    expect(score({ Symmetric: ["c", "d"], Skewed: ["a", "b"] })).toBe(1);
  });

  it("does not depend on the order cards were dropped into a bucket", () => {
    expect(score({ Skewed: ["b", "a"], Symmetric: ["d", "c"] })).toBe(1);
  });

  it("gives no credit for a misfiled item", () => {
    expect(score({ Skewed: ["a", "c"], Symmetric: ["b", "d"] })).toBe(0);
  });

  it("gives no credit for a missing item or an empty answer", () => {
    expect(score({ Skewed: ["a"], Symmetric: ["c", "d"] })).toBe(0);
    expect(score({})).toBe(0);
  });

  it("passes the mapping through getAnswerFromDOM", async () => {
    const mapping = { Skewed: ["a"] };
    expect(await CategorizeMethods.getAnswerFromDOM!({ answer: mapping }, null as never)).toBe(mapping);
  });
});

describe("MultipleChoice scoring", () => {
  const compare = MultipleChoiceMethods.compareAnswers!;

  it("scores a single answer", () => {
    expect(compare({ answer: "x" }, { answer: "x" })).toBe(1);
    expect(compare({ answer: "x" }, { answer: "y" })).toBe(0);
  });

  it("treats a multi-answer key as a set", () => {
    expect(compare({ answer: ["x", "y"] }, { answer: ["y", "x"] })).toBe(1);
    expect(compare({ answer: ["x", "y"] }, { answer: ["x"] })).toBe(0);
    expect(compare({ answer: ["x", "y"] }, { answer: ["x", "y", "z"] })).toBe(0);
  });

  it("does not reorder the caller's arrays", () => {
    const key = { answer: ["y", "x"] };
    const user = { answer: ["y", "x"] };
    compare(key, user);
    expect(key.answer).toEqual(["y", "x"]);
    expect(user.answer).toEqual(["y", "x"]);
  });

  it("sorts multi-select responses and passes single ones through", async () => {
    const get = MultipleChoiceMethods.getAnswerFromDOM!;
    expect(await get({ answer: ["b", "a"] }, null as never)).toEqual({ answer: ["a", "b"] });
    expect(await get({ answer: "a" }, null as never)).toEqual({ answer: "a" });
  });
});

describe("MultipleChoice without an answer key (surveys)", () => {
  it("is never scored wrong", () => {
    const compare = MultipleChoiceMethods.compareAnswers!;
    expect(compare(undefined, { answer: "Confident" })).toBe(1);
    expect(compare(undefined, { answer: ["a", "b"] })).toBe(1);
    expect(compare({ answer: [] }, { answer: "a" })).toBe(1);
  });

  it("builds its choices from the distractors alone", () => {
    const state = MultipleChoiceMethods.questionState!(
      { prompt: "", distractors: ["Low", "Medium", "High"], sortAnswers: true },
      undefined
    );
    expect(state.choices).toEqual(["High", "Low", "Medium"]);
  });
});

describe("MultipleChoice choices", () => {
  const choicesOf = (prompt: object, answer: object) =>
    (MultipleChoiceMethods.questionState as (p: unknown, a: unknown) => { choices: string[] })(
      { prompt: "", ...prompt },
      answer
    ).choices;

  it("puts the answer at answerIndex among the distractors", () => {
    expect(choicesOf({ distractors: ["d1", "d2"], answerIndex: 1 }, { answer: "A" })).toEqual(["d1", "A", "d2"]);
  });

  it("sorts alphabetically when sortAnswers is set", () => {
    expect(choicesOf({ distractors: ["z", "m"], sortAnswers: true }, { answer: "a" })).toEqual(["a", "m", "z"]);
  });

  it("includes every choice when shuffled", () => {
    expect(choicesOf({ distractors: ["d1", "d2"] }, { answer: ["A", "B"] }).sort()).toEqual(["A", "B", "d1", "d2"]);
  });
});

describe("ShortAnswer scoring", () => {
  const compare = ShortAnswerMethods.compareAnswers!;

  it("ignores case and surrounding whitespace", () => {
    expect(compare({ answer: "Yes" }, { answer: "  yEs " })).toBe(1);
  });

  it("accepts any listed alternative", () => {
    const key = { answer: "Yes", alternatives: ["Ok", "Sure"] };
    expect(compare(key, { answer: "sure" })).toBe(1);
    expect(compare(key, { answer: "No" })).toBe(0);
  });

  it("does not trim inside the answer", () => {
    expect(compare({ answer: "a b" }, { answer: "ab" })).toBe(0);
  });

  it("treats a question with no answer key as unscored instead of wrong", () => {
    expect(compare(undefined as never, { answer: "anything" })).toBe(1);
    expect(compare({} as never, { answer: "anything" })).toBe(1);
    expect(compare({ answer: "  " }, { answer: "anything" })).toBe(1);
  });
});
