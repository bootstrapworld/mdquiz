import type { MultipleChoice } from "./MultipleChoice";
import type { ShortAnswer } from "./ShortAnswer";
import type { Tracing } from "./Tracing";
import type { Informational } from "./Informational";
import type { CardSort } from "./CardSort";

export type Question = 
	{ "type": "ShortAnswer" } 	 & ShortAnswer 	  | 
	{ "type": "Tracing" } 		 & Tracing 		  | 
	{ "type": "MultipleChoice" } & MultipleChoice | 
	{ "type": "Informational" }  & Informational  | 
	{ "type": "CardSort" } 		 & CardSort;