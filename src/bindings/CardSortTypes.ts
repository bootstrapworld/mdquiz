export interface Card {
  id: number;
  text?: string;
  image?: string;
}

export interface CardSortPrompt {
  prompt: string;
  cards: Card[];
  answerKey?: number[][];
  sorted?: boolean;
}

export interface CardSortAnswer {
  answerGroups: number[][];
}
