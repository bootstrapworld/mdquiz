# mdquiz

This package is derived from Will Crichton's [mdbook-quiz](https://github.com/cognitive-engineering-lab/mdbook-quiz) repo. 

It's a simple typescript library that takes a TOML-defined text file and generates a quiz. A number of questions types are available:

- *Short Answer* - exactly what it sounds like
- *Multiple Choice* - distractors can be randomized or not
- *Tracing* - specifically for working with code snippets
- *Informational* - rather than being an actual questions, this is essentially a "poster" with instructions. 

Each question type can be configured with an optional image path, to display an image alongside the question.

When a student takes the quiz, their quiz data is shared to a logging server you configure. At the end of the quiz the students receives their score and a breakdown of right and wrong answers.

## Building

After the usual `npm install`, the library can be built using `npm run build`.

## Hacking on mdquiz

While the source for the library resides in `src/`, a sample quiz is provided in the `sample-quiz` folder. While developing, you'll likely want to see this sample quiz used with the current version of the library!

Running `npm run dev` will compile the library, then the sample-quiz,  launch a simple server, and open a web browser to the compiled quiz.