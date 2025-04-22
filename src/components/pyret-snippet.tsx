import React, { useEffect, useRef } from "react";
import { makeEmbed } from "pyret-embed";

export interface SnippetOptions {
  snippet: string;
  // exported API types go here
}

export const PyretSnippet: React.FC<SnippetOptions> = options => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect( () => {
    makeEmbed("Embedded Editor", ref.current, "https://pyret-horizon.herokuapp.com/editor")
  }, [options]);
  return <div ref={ref} />;
};
