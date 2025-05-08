import type { MultipleChoice } from "./MultipleChoice";
import type { ShortAnswer } from "./ShortAnswer";
import type { Tracing } from "./Tracing";
import type { Informational } from "../questions/informational";
import type { CardSort } from "../questions/card-sort";

export type Question = 
	{ "type": "ShortAnswer" } 	 & ShortAnswer 	  | 
	{ "type": "Tracing" } 		 & Tracing 		  | 
	{ "type": "MultipleChoice" } & MultipleChoice | 
	{ "type": "Informational" }  & Informational  | 
	{ "type": "CardSort" } 		 & CardSort	 	  |
	{ "type": "Pyret" }          & Pyret;