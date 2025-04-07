import React, { useCallback } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import classNames from "classnames";

import type { CardSortPrompt, CardSortAnswer } from "../bindings/CardSortTypes";
import { MarkdownView } from "../components/markdown";
import type { QuestionMethods } from "./types";

const CARD = "CARD";

const Card = ({
  card,
  moveCard,
  groupIndex,
}: {
  card: { id: number; text?: string; image?: string };
  moveCard: (item: { id: number; groupIndex: number }, targetGroupIndex: number) => void;
  groupIndex: number;
}) => {
  const [{ isDragging }, drag] = useDrag({
    type: CARD,
    item: { id: card.id, groupIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: CARD,
    hover: (item) => {
      if (item.id !== card.id) {
        moveCard(item, groupIndex);
      }
    },
  });

  const ref = React.useRef<HTMLDivElement>(null);
  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={classNames("card", { dragging: isDragging })}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {card.text && <MarkdownView markdown={card.text} />}
      {card.image && <img src={card.image} alt="Card visual" />}
    </div>
  );
};

const CardGroup = ({
  group,
  moveCard,
}: {
  group: { index: number; cards: { id: number; text?: string; image?: string }[] };
  moveCard: (item: { id: number; groupIndex: number }, targetGroupIndex: number) => void;
}) => {
  const [, drop] = useDrop({
    accept: CARD,
    drop: (item) => moveCard(item, group.index),
  });

  return (
    <div ref={drop} className="card-group">
      {group.cards.map((card) => (
        <Card key={card.id} card={card} moveCard={moveCard} groupIndex={group.index} />
      ))}
    </div>
  );
};

export const CardSortMethods: QuestionMethods<CardSortPrompt, CardSortAnswer, any> = {
  PromptView: ({ prompt }) => (
    <div>
      <MarkdownView markdown={prompt.prompt} />
    </div>
  ),

  questionState(prompt) {
    const groups = prompt.answerKey
      ? prompt.answerKey.map((group, index) => ({
          index,
          cards: group.map((id) =>
            prompt.cards.find((card) => card.id === id)
          ),
        }))
      : [{ index: 0, cards: shuffle(prompt.cards) }];
    return { groups };
  },

  ResponseView: ({ state, setState }) => {
    const moveCard = useCallback(
      (item, targetGroupIndex) => {
        setState((prevState) => {
          const groupsCopy = prevState.groups.map((group) => ({
            ...group,
            cards: [...group.cards],
          }));

          const sourceGroup = groupsCopy[item.groupIndex];
          const targetGroup = groupsCopy[targetGroupIndex];

          const cardIndex = sourceGroup.cards.findIndex(
            (card) => card.id === item.id
          );

          if (cardIndex === -1) return prevState; // Card not found, return unchanged state

          const [movedCard] = sourceGroup.cards.splice(cardIndex, 1);
          targetGroup.cards.push(movedCard);

          return { groups: groupsCopy };
        });
      },
      [setState]
    );

    return (
      <DndProvider backend={HTML5Backend}>
        <div className="card-sort-container">
          {state.groups.map((group) => (
            <CardGroup key={group.index} group={group} moveCard={moveCard} />
          ))}
        </div>
      </DndProvider>
    );
  },

  getAnswerFromDOM(state) {
    return {
      answerGroups: state.groups.map((group) =>
        group.cards.map((card) => card.id)
      ),
    };
  },

  compareAnswers(provided, user) {
    if (!provided?.answerGroups || !user?.answerGroups) {
      return false; // Handle undefined or null answer groups
    }

    if (!provided.sorted) {
      const toSet = (groups) =>
        groups.map((group) => new Set(group)).map((set) => [...set].sort());
      return isEqual(toSet(provided.answerGroups), toSet(user.answerGroups));
    }
    return isEqual(provided.answerGroups, user.answerGroups);
  },

  AnswerView: ({ answer }) => (
    <div>
      {answer.answerGroups.map((group, index) => (
        <div key={index} className="answer-group">
          {group.map((id) => (
            <div key={id} className="answer-card">
              {id}
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
};

const shuffle = <T,>(array: T[]): T[] => [...array].sort(() => Math.random() - 0.5);
