import React, { useEffect, useRef, useState } from "react";
import { makeEmbed } from "pyret-embed";

export interface SnippetOptions {
  program: string;
  checkblock?: string;
  // exported API types go here
}

// A plain rotating-circle spinner (see .pyret-spinner in index.css for the
// animation). Replaces react-loader-spinner, whose only use in this whole
// codebase was this one spot -- and whose peer dependency on real React 19
// permanently conflicted with this project's react -> @preact/compat alias.
const Spinner = () => (
  <svg className="pyret-spinner" width="96" height="96" viewBox="0 0 96 96">
    <circle
      cx="48" cy="48" r="40"
      fill="none"
      stroke="grey"
      strokeWidth="5"
      strokeLinecap="round"
      strokeDasharray="180 251"
    />
  </svg>
);

export const PyretSnippet: React.FC<SnippetOptions> = options => {
  // create a ref, so that we can render into the DOM
  const ref = useRef<HTMLDivElement>(null);

  // state for showing loading indicator
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    // disable the submit button on the editor is loaded
    const submitButton = document.querySelector('input[type=submit]') as HTMLInputElement
    submitButton.disabled = true;

    const setupEditor = async () => {
      const editor = await makeEmbed("EmbeddedEditor", ref.current, "https://pyret-horizon.herokuapp.com/editor")

      // Log this to your console to verify the saved code is arriving
      console.log("Initializing Pyret with:", options.program);

      // hide the loading indicator and re-enable the submit button
      setIsLoading(false);
      submitButton.disabled = false;

      editor.sendReset({
        definitionsAtLastRun: options.program,
        interactionsSinceLastRun: ["r"],
        editorContents: options.program,
        replContents: ""
      });
    }

    setupEditor();
  }, [options.program]); // only reset if the program changes

  // the "loading" spinner, which is null if we're done loading
  const spinner = isLoading? (
      <div style={{
        display:       'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:    'center',
      }}>
      <div>Loading the Pyret Editor...</div>
        <Spinner />
      </div>
    ) : null;

  return (
    <div>
      {spinner}
      <div ref={ref} className="embedded-editor" style={{display:isLoading? "none" : "unset"}}/>
    </div>
  );
};
