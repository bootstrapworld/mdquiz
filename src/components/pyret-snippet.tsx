import React, { useEffect, useRef } from "react";
import { makeEmbed } from "pyret-embed";

export interface SnippetOptions {
  program: string;
  checkblock?: string;
  // exported API types go here
}

export const PyretSnippet: React.FC<SnippetOptions> = options => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect( () => {
    const setupEditor = async () => {
      const editor = await makeEmbed("EmbeddedEditor", ref.current, "https://pyret-horizon.herokuapp.com/editor")
      editor.sendReset({
        definitionsAtLastRun: options.program,
        interactionsSinceLastRun: ["r"],
        editorContents: options.program,
        replContents: ""
      });

      //@ts-ignore
      editor.getFrame().editor = editor;
    }
    setupEditor();
  }, [options]);
  return <div ref={ref} className="embedded-editor"/>;
};
