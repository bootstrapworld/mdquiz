import React, { 
  useState, 
  useEffect, 
  useRef, 
  useCallback, 
  CSSProperties 
} from "react";
import { DndProvider, useDrag, useDrop, XYCoord } from 'react-dnd';
import { HTML5Backend, getEmptyImage } from 'react-dnd-html5-backend';
import { MarkdownView } from "./markdown";
import { CardSortPrompt, Card } from "../bindings/CardSortPrompt";
import hash from "object-hash";

const containerStyle: CSSProperties = {
  position: 'relative', 
  width: '600px', 
  height: '300px', 
  border: 'solid 1px black' 
}
export interface DragItem {
  id: string
  card: Card,
  top: number
  left: number
}

export const CardSortView: React.FC<{data: Card[]}> = ({data}) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Container data={data}/>
    </DndProvider>);
}

const Container: React.FC<{data: Card[]}> = ({data}) => {
  const [cards, setCards] = useState(data);

  const moveCard = useCallback( (id, left, top) => {

      const droppedIndex = cards.findIndex(c => c.id === id)

      const newCards = [...cards];
      newCards[droppedIndex].left = left; 
      newCards[droppedIndex].top = top;
      newCards[droppedIndex].id = newCards[droppedIndex].id+".";

      newCards[droppedIndex] = structuredClone(newCards[droppedIndex]);

      console.log('newcards (w/moved) are', newCards);
      console.log(newCards[droppedIndex])
      return setCards(newCards);
    },
    [cards, setCards]
  )

  const [, drop] = useDrop(
    () => ({
      accept: 'CARD',
      drop(item: DragItem, monitor) {
        const change = monitor.getDifferenceFromInitialOffset() as XYCoord
        const left = Math.round(item.left + change.x)
        const top = Math.round(item.top + change.y)
        //console.log(item,'dropped at', left, top)
        moveCard(item.id, left, top)
        return undefined
      },
    }),
    [moveCard],
  )
console.log(cards);
  // @ts-ignore
  return (<div ref={drop} style={containerStyle}>
        {cards.map( (card, idx) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            content={card.content}
            moveCard={moveCard}
            left={card.left}
            top={card.top}
          />
        ))}
      </div>
  );
};


const Card = ({ id, title, content, moveCard, left, top }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: 'CARD',
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top],
  );

/*
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  }, [])

  const [, drop] = useDrop({
    accept: 'CARD',
    hover: (item:itemType, monitor) => {
      if (!item || item.id === id) {
        return;
      }
      const targetIndex = index;
      const sourceIndex = item.index;
      if (targetIndex === sourceIndex) {
        return;
      }
      moveCard(sourceIndex, targetIndex);
      item.index = targetIndex;
    },
  });
  drag(drop(ref));
*/
  drag(ref);

  const cardStyle: CSSProperties = {
    position:     'absolute',
    border:       '1px dashed gray',
    padding:      '0.5rem 1rem',
    cursor:       'move',
    maxWidth:     '200px',
    boxShadow:    '10px 5px 5px gray',
    background:   'white',
    zIndex:        isDragging? '1000' : 'auto',
    opacity:       1,
  }

  if(isDragging) {
    // @ts-ignore
    return <div ref={drag} />
  }

  return (
    <div
      ref={ref}
      id={id}
      style={{...cardStyle, left, top}}
    >
      <h3>{title}</h3>
      <MarkdownView markdown={content} />
    </div>
  );
};
