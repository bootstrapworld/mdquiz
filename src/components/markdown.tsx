import React, { useEffect, useMemo, useRef } from "react";
import MarkdownIt from "markdown-it";

import { type SnippetOptions, snippetToNode } from "./snippet";

// Mirror the old showdown defaults: raw HTML passes through, and no tables,
// strikethrough or autolinks (existing quizzes don't use them).
const md = new MarkdownIt({ html: true, linkify: false }).disable([
  "table",
  "strikethrough"
]);

// Quiz markdown is trusted, but the result is injected as HTML, so drop the
// things that would execute: <script>, on* handlers and javascript: URLs.
const stripActiveContent = (root: ParentNode) => {
  root.querySelectorAll("script").forEach(n => n.remove());
  root.querySelectorAll("*").forEach(el => {
    for (const attr of Array.from(el.attributes)) {
      const unsafeUrl =
        ["href", "src", "xlink:href", "action", "formaction"].includes(
          attr.name
        ) && /^\s*javascript:/i.test(attr.value);
      if (attr.name.startsWith("on") || unsafeUrl) el.removeAttribute(attr.name);
    }
  });
};

const renderMarkdown = (
  markdown: string,
  options?: Partial<SnippetOptions>
): string => {
  const parser = new DOMParser();
  const document = parser.parseFromString(md.render(markdown), "text/html");
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
  stripActiveContent(document.body);
  return document.body.innerHTML;
};

declare global {
  function initAquascopeBlocks(root: HTMLElement): void;
}

export const MarkdownView: React.FC<{
  markdown: string;
  imag?: string;
  snippetOptions?: Partial<SnippetOptions>;
}> = ({ markdown, snippetOptions }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    //renderIde(ref.current!, snippetOptions);
    window.initAquascopeBlocks?.(ref.current!);
  }, [markdown]);

  const html = useMemo(
    () => renderMarkdown(markdown, snippetOptions),
    [markdown, snippetOptions]
  );

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />;
};
