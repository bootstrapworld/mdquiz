import React, { useEffect, useRef, useState } from "react";
import { makeEmbed } from "pyret-embed";
import { RotatingLines } from "react-loader-spinner";

export interface SnippetOptions {
  program: string;
  checkblock?: string;
  // exported API types go here
}

export const PyretSnippet: React.FC<SnippetOptions> = options => {
  // state for showing loading indicator
  const [isLoading, setIsLoading] = useState(true);

  // create a ref, so that we can render into the DOM
  const ref = useRef<HTMLDivElement>(null);
  useEffect( () => {
    const setupEditor = async () => {
      const editor = await makeEmbed("EmbeddedEditor", ref.current, "https://pyret-horizon.herokuapp.com/editor")

      // hide the loading indicator
      setIsLoading(false);

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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
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
      <div ref={ref} className="embedded-editor"/>;
    </div>)
};
