export type Markdown = string;

import type { MultipleChoice } 	from "../questions/multiple-choice";
import type { ShortAnswer } 	from "../questions/short-answer";
import type { Tracing } 		from "../questions/tracing";
import type { Informational } 	from "../questions/informational";
import type { CardSort } 		from "../questions/card-sort";
import type { Pyret } 			from "../questions/pyret";

export type Question = 
	{ "type": "ShortAnswer" } 	 & ShortAnswer 	  | 
	{ "type": "Tracing" } 		 & Tracing 		  | 
	{ "type": "MultipleChoice" } & MultipleChoice | 
	{ "type": "Informational" }  & Informational  | 
	{ "type": "CardSort" } 		 & CardSort	 	  |
	{ "type": "Pyret" }          & Pyret;

export interface QuestionFields<Prompt, Answer> {
	id?: string,
	multipart?: string,
	prompt: Prompt,
	answer: Answer,
	context?: Markdown,
	promptExplanation?: boolean,
	image?: string
}
