import React, { useEffect, useRef, useState } from "react";
import { makeEmbed } from "pyret-embed";
import { RotatingLines } from "react-loader-spinner";

export interface SnippetOptions {
  program: string;
  checkblock?: string;
  // exported API types go here
}

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
  }, [options]);

  // the "loading" spinner, which is null if we're done loading
  const spinner = isLoading? (
      <div style={{
        display:       'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:    'center',
      }}>
      <div>Loading the Pyret Editor...</div>
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    ) : null;

  return (
    <div>
      {spinner}
      <div ref={ref} className="embedded-editor" style={{display:isLoading? "none" : "unset"}}/>
    </div>
  );
};
