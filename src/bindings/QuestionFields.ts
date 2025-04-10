import type { Markdown } from "./Markdown";

export interface QuestionFields<Prompt, Answer> { 
	id?: string, 
	multipart?: string, 
	prompt: Prompt, 
	answer: Answer, 
	context?: Markdown, 
	promptExplanation?: boolean, 
	image?: string
}