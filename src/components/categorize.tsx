import React, { useState, useEffect, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { MarkdownView } from "../components/markdown";
import type { QuestionFields, Markdown } from "../bindings/Question";

/**
 * Data Structures
 */
export type CategorizePrompt = {
  prompt: Markdown;
  leftColumn: Markdown[];  // Labels for buckets (Markdown supported)
  rightColumn: Markdown[]; // Content for cards (Markdown supported)
};

export type CategorizeAnswer = Record<string, string[]>;
export type Categorize = QuestionFields<CategorizePrompt, CategorizeAnswer>;

/**
 * Sub-Component: Card
 */
const Card = ({ content }: { content: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CATEGORIZE_ITEM',
    item: { name: content },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  }), [content]);

  drag(ref);

  return (
    <div ref={ref} className="categorize-card" style={{
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
    accept: 'CATEGORIZE_ITEM',
    drop: (item: { name: string }) => {
      onDrop(item.name);
      return { name: item.name };
    },
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  }), [onDrop]);

  drop(ref);

  return (
    <div ref={ref} className="categorize-bucket" style={{
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
 * Auto-scrolls the page while a card is being dragged near the top or
 * bottom edge of the viewport, so a bucket that's currently offscreen
 * (e.g. above the fold) can be scrolled into view without dropping.
 */
const AUTOSCROLL_EDGE_PX = 60;
const AUTOSCROLL_MAX_SPEED = 20;

const useAutoScrollOnDrag = () => {
  useEffect(() => {
    let rafId: number | null = null;
    let pointerY = -1;

    const scrollStep = () => {
      const vh = window.innerHeight;
      let dy = 0;
      if (pointerY >= 0 && pointerY < AUTOSCROLL_EDGE_PX) {
        dy = -AUTOSCROLL_MAX_SPEED * (1 - pointerY / AUTOSCROLL_EDGE_PX);
      } else if (pointerY >= 0 && pointerY > vh - AUTOSCROLL_EDGE_PX) {
        dy = AUTOSCROLL_MAX_SPEED * (1 - (vh - pointerY) / AUTOSCROLL_EDGE_PX);
      }

      if (dy !== 0) {
        window.scrollBy(0, dy);
        rafId = requestAnimationFrame(scrollStep);
      } else {
        rafId = null;
      }
    };

    const handleDragOver = (e: DragEvent) => {
      pointerY = e.clientY;
      if (rafId === null) rafId = requestAnimationFrame(scrollStep);
    };

    const stopScrolling = () => {
      pointerY = -1;
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    document.addEventListener('dragover', handleDragOver);
    document.addEventListener('dragend', stopScrolling);
    document.addEventListener('drop', stopScrolling);

    return () => {
      document.removeEventListener('dragover', handleDragOver);
      document.removeEventListener('dragend', stopScrolling);
      document.removeEventListener('drop', stopScrolling);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);
};

/**
 * Main View
 */
export const CategorizeView = ({ prompt, value, onChange, hideUsedCards }: any) => {
  useAutoScrollOnDrag();

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

  // When hideUsedCards is set, an item that has already been dropped into
  // any bucket moves out of the pool of available cards, rather than
  // staying available to be dropped into additional buckets.
  const usedCards = new Set(Object.values(value).flat() as string[]);
  const availableCards = hideUsedCards
    ? prompt.rightColumn.filter((item: string) => !usedCards.has(item))
    : prompt.rightColumn;

  return (
    <div>
      {/* Left Column: The Buckets */}
      <div className="categorize-buckets">
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
      <div className="categorize-cards">
        <h5 style={{ marginTop: 0 }}>Items to Match</h5>
        {availableCards.map((item: string) => (
          <Card key={item} content={item} />
        ))}
      </div>
    </div>
  );
};
