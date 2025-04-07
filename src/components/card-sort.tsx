import React, { 
  useState, 
  useEffect, 
  useRef, 
  useCallback, 
  CSSProperties,
  Dispatch,
  SetStateAction
} from "react";
import { DndProvider, useDrag, useDrop, XYCoord } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { MarkdownView } from "./markdown";
import { CardSortPrompt, Card } from "../bindings/CardSortPrompt";
import hash from "object-hash";

const containerStyle: CSSProperties = {
  position: 'relative', 
  width: '600px', 
  height: '300px', 
  border: 'solid 1px black',
  overflow: 'hidden',
}
export interface DragItem {
  id: string
  card: Card,
  top: number
  left: number
}

export const CardSortView: React.FC<{
  data: Card[], 
  updateData: Dispatch<SetStateAction<Card[]>>
}> = ({data, updateData}) => {

  const cards = data.map( card => {
    card.cards = card.cards || []; // initialize to empty
    card.left = card.left   || Math.random() * 400;
    card.top  = card.top    || Math.random() * 200;
    return card
  })

  return (
    <DndProvider backend={HTML5Backend}>
      <Container cards={cards} setCards={updateData}/>
    </DndProvider>);
}

const Container: React.FC<{
  cards: Card[], 
  setCards: Dispatch<SetStateAction<Card[]>>
}> = ({cards, setCards}) => {

  const moveCard = useCallback( 
    (id, left, top) => {

      const childCards = cards.map(c => c.cards).flat();
      const parentId   = cards.find(c => c.cards.find(c => c.id==id))?.id
      const movedCard  = cards.concat(childCards).find(c => c.id === id)
      //console.log('moved card is', id, '. parent card is', parentId)

      const newCards = cards.filter(c => c.id !== id)
      
      if (parentId) { 
        const parentCard = newCards.find(c => c.id == parentId);
        //console.log('removing',movedCard.id, 'from', parentCard)
        parentCard.cards = parentCard.cards.filter(c => c.id !== id)
      }

      // update the moved card with new posn, and change
      // the id so react redraws it
      movedCard.left = left; 
      movedCard.top = top;
      movedCard.id += ".";

      // set state
      return setCards(newCards.concat([movedCard]));
    },
    [cards, setCards]
  )

  const addCardToGroup = useCallback(
    (id, parentId) => {
      const childCards = cards.map(c => c.cards).flat();
      const movedCard = childCards.concat(cards).find(c => c.id === id);
      const parentCard = cards.find(c => c.id === parentId)
      console.log(movedCard.id, 'was dropped onto', parentCard.id);

      // add the moved card to the parent's card group
      parentCard.cards = [...parentCard.cards, movedCard]

      // shallow copy the cards
      const newCards = cards
        .filter(c => ![c.id, parentId].includes(id))

      // set state
      return setCards(newCards);
    },
    [cards, setCards]
  )

  const [, drop] = useDrop(
    () => ({
      accept: 'CARD',
      drop(item: DragItem, monitor) {
        // if the drop event was= already handled, 
        // (ie - dropped on a card), return;
        if(monitor.didDrop()) { 
          return;
        }
        const change = monitor.getDifferenceFromInitialOffset() as XYCoord
        const coord = monitor.getClientOffset() as XYCoord
        const left   = Math.round(item.left + change.x)
        const top    = Math.round(item.top  + change.y)
        //console.log(item,'dropped at', left, top)
        moveCard(item.id, left, top)
        return undefined
      },
    }),
    [moveCard],
  )

  // @ts-ignore
  return (<div ref={drop} style={containerStyle}>
        {cards.map( (card, idx) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            content={card.content}
            moveCard={moveCard}
            addCardToGroup={addCardToGroup}
            left={card.left}
            top={card.top}
            cards={card.cards}
            inGroup={false}
          />
        ))}
      </div>
  );
};


const Card = ({ 
  id, 
  title, 
  content, 
  moveCard, 
  addCardToGroup, 
  left, 
  top,
  cards,
  inGroup,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // state to determine z-index
  const [clicked, setClicked] = useState(false);

  // dragging code
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'CARD',
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top],
  )

  // dropping code
  const [{isUnder}, drop] = useDrop({
    accept: 'CARD',
    collect: (monitor) => ({
        isUnder: monitor.isOver() && !inGroup
    }),
    drop: (item:DragItem, monitor) => {
      addCardToGroup(item.id, id);
    },
  });
  drag(drop(ref));

  const cardStyle: CSSProperties = {
    position:     inGroup? 'unset' : 'absolute',
    cursor:       'move',
    maxWidth:     '200px',
    background:   isUnder? 'gray' 
                    : (cards.length > 0)? 'lightgray'
                    : 'white',
    border:       isUnder? '2px solid black' 
                    : inGroup? 'none'
                    : '1px dashed gray',
    borderTop:    '1px dashed gray',
    zIndex:       clicked? '1000' : 'auto',
    opacity:      1,
    display:      'flex',
    flexDirection:'column',
  }

  if(isDragging) {
    // @ts-ignore
    return <div ref={drag} />
  }

  return (
    <div
      className="card"
      ref={ref}
      id={id}
      style={{...cardStyle, left, top}}
      onMouseDown={() => setClicked(true)}
      onMouseLeave={() => setClicked(false)}
    >
      <h3>{title}</h3>
      <MarkdownView markdown={content} />
      {cards.map( (card, idx) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            content={card.content}
            moveCard={moveCard}
            addCardToGroup={(id, parent) => false}
            left={card.left}
            top={card.top}
            cards={[]}
            inGroup={true}
          />
        ))}
    </div>
  );
};
