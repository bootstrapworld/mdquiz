import React, { useState, useEffect, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { MarkdownView } from "../components/markdown";
import type { QuestionFields, Markdown } from "../bindings/Question";

/**
 * Data Structures
 */
export type MatchingPrompt = {
  prompt: Markdown;
  leftColumn: Markdown[];  // Labels for buckets (Markdown supported)
  rightColumn: Markdown[]; // Content for cards (Markdown supported)
};

export type MatchingAnswer = Record<string, string[]>;
export type Matching = QuestionFields<MatchingPrompt, MatchingAnswer>;

/**
 * Sub-Component: Card
 */
const Card = ({ content }: { content: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'MATCHING_ITEM',
    item: { name: content },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  }), [content]);

  drag(ref);

  return (
    <div ref={ref} className="matching-card" style={{
      opacity: isDragging ? 0.5 : 1
    }}>
      <MarkdownView markdown={content} />
    </div>
  );
};

/**
 * Sub-Component: Bucket
 */
const Bucket = ({ label, matches, onDrop, onClear }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'MATCHING_ITEM',
    drop: (item: { name: string }) => {
      onDrop(item.name);
      return { name: item.name };
    },
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  }), [onDrop]);

  drop(ref);

  return (
    <div ref={ref} className="matching-bucket" style={{
      background: isOver ? '#e0f7fa' : '#f4f4f4',
      border: isOver ? '2px dashed #013A63' : '1px solid #ccc',
    }}>
      <div className="bucket-label">
        <MarkdownView markdown={label} />
      </div>

      <div className="bucket-matches">
        {matches.map((m: string, i: number) => (
          <div key={i} className="match-tag">
            <MarkdownView markdown={m} />
          </div>
        ))}
      </div>

      {matches.length > 0 && (
        <button
          onClick={onClear}
          className="bucket-reset"
          title="Clear bucket"
        >
          ✕
        </button>
      )}
    </div>
  );
};

/**
 * Main View
 */
export const MatchingView = ({ prompt, value, onChange }: any) => {
  const handleDrop = (leftItem: string, cardName: string) => {
    onChange((prev: Record<string, string[]>) => {
      const currentMatches = prev[leftItem] || [];
      if (currentMatches.includes(cardName)) return prev;
      return {
        ...prev,
        [leftItem]: [...currentMatches, cardName]
      };
    });
  };

  return (
    <div>
      {/* Left Column: The Buckets */}
      <div className="matching-buckets">
        {prompt.leftColumn.map((item: string) => (
          <Bucket
            key={item}
            label={item}
            matches={value[item] || []}
            onDrop={(card: string) => handleDrop(item, card)}
            onClear={() => {
              onChange((prev: any) => {
                const next = { ...prev };
                delete next[item];
                return next;
              });
            }}
          />
        ))}
      </div>

      {/* Right Column: The Available Cards */}
      <div className="matching-cards">
        <h5 style={{ marginTop: 0 }}>Items to Match</h5>
        {prompt.rightColumn.map((item: string) => (
          <Card key={item} content={item} />
        ))}
      </div>
    </div>
  );
};