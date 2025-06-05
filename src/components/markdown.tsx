import React, { useEffect, useRef } from "react";
import { Markdown as Showdown, type ShowdownExtension } from "react-showdown";

import { type SnippetOptions, snippetToNode } from "./snippet";

const highlightExtension = (
  options?: Partial<SnippetOptions>
): ShowdownExtension => ({
  type: "output",
  filter(text:string) {
    const parser = new DOMParser();
    const document = parser.parseFromString(text, "text/html");
    const snippets = document.querySelectorAll("pre > code");
    snippets.forEach(node => {
      if (node.classList.contains("ide")) return;

      let language = undefined;
      node.classList.forEach(cls => {
        const prefix = "language-";
        if (cls.startsWith(prefix)) {
          language = cls.slice(prefix.length);
        }
      });

      const newNode = snippetToNode({
        ...(options || {}),
        snippet: node.textContent!,
        language
      });
      const pre = node.parentNode as HTMLPreElement;
      pre.replaceWith(newNode);
    });
    return document.body.innerHTML;
  }
});

declare global {
  function initAquascopeBlocks(root: HTMLElement): void;
}

export const MarkdownView: React.FC<{
  markdown: string;
  imag?: string;
  snippetOptions?: Partial<SnippetOptions>;
}> = ({ markdown, imag = null, snippetOptions }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    //renderIde(ref.current!, snippetOptions);
    window.initAquascopeBlocks?.(ref.current!);
  }, [markdown]);

  return (
    <div ref={ref}>
      <Showdown
        markdown={markdown}
        extensions={[highlightExtension(snippetOptions)]}
      />
    </div>
  );
};
