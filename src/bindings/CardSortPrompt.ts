import type { Markdown } from "./Markdown";


// a card is a tuple containing a title and some content
export type Card = { id?: string, title:string, content:string, top?: number, left?: number }

// a CardSort Prompt contains a normal prompt and a CardArray
export interface CardSortPrompt { prompt: Markdown, cards: Card[] }