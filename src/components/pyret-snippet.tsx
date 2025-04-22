import React, { useEffect, useRef } from "react";
import { makeEmbed } from "pyret-embed";

export interface SnippetOptions {
  program: string;
  // exported API types go here
}

export const PyretSnippet: React.FC<SnippetOptions> = options => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect( () => {
    const setupEditor = async () => {
      const editor = await makeEmbed("Embedded Editor", ref.current, "https://pyret-horizon.herokuapp.com/editor")
      editor.sendReset({
        definitionsAtLastRun: "use context starter2024",
        interactionsSinceLastRun: [],
        editorContents: options.program,
        replContents: ""
      });
    }
    setupEditor();
  }, [options]);
  return <div ref={ref} />;
};
