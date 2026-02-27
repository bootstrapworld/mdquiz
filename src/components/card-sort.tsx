import React, { 
  useState, 
  useEffect, 
  useRef, 
  useCallback, 
  CSSProperties,
  Dispatch,
  SetStateAction,
  RefObject
} from "react";
import { DndProvider, useDrag, useDrop, XYCoord } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { MarkdownView } from "./markdown";
import { CardSortPrompt, Card } from "../questions/card-sort";
import hash from "object-hash";

const containerStyle: CSSProperties = {
  position: 'relative', 
  overflow: 'scroll',
}
export interface DragItem {
  id: string
  card: Card,
  top: number
  left: number
}

export const CardSortView: React.FC<{
  data: Card[], 
  setCards: Dispatch<SetStateAction<Card[]>>,
}> = ({data, setCards}) => {
  const copy = structuredClone(data);
  return (
    <DndProvider backend={HTML5Backend}>
      <Container cards={copy} setCards={setCards}/>
    </DndProvider>);
}

const Container: React.FC<{
  cards: Card[], 
  setCards: Dispatch<SetStateAction<Card[]>>
}> = ({cards, setCards}) => {
  // create a ref, so that we can render into the DOM
  const ref = useRef<HTMLDivElement>(null);

  useEffect( () =>{
    // take the original data and extend it with empty child
    // arrays and randomly-distributed coords
    if(ref.current && !cards.some(card => card.children && card.left && card.top)) {
      let { width, height } = ref.current.getBoundingClientRect();
      width  -= 250;
      height -= 250;
      setCards(cards.map( card => {
        card.children = card.children || [];
        card.left     = Math.random() * width;
        card.top      = Math.random() * height;
        return card
      }));
    }
  }, [ref])

  const moveCard = useCallback( 
    (id, left, top) => {

      const children  = cards.map(c => c.children).flat();
      const parentId  = cards.find(c => c.children.find(c => c.id==id))?.id
      const movedCard = cards.concat(children).find(c => c.id === id)
      //console.log('moved card is', id, '. parent card is', parentId)

      const newCards = cards.filter(c => c.id !== id)
      
      if (parentId) { 
        const parentCard = newCards.find(c => c.id == parentId);
        //console.log('removing',movedCard.id, 'from', parentCard)
        parentCard.children = parentCard.children.filter(c => c.id !== id)
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
      const childCards = cards.map(c => c.children).flat();
      const movedCard  = childCards.concat(cards).find(c => c.id == id);
      const parentCard = cards.find(c => c.id == parentId)
      console.log(movedCard.id, 'was dropped onto', parentCard.id);

      // if the moved card was already in a group, remove first
      cards.forEach(c => {
        const idx = c.children.findIndex(c => c.id == movedCard.id);
        if(idx == -1) return; // it's not in this list
        else c.children.splice(idx, 1) // it is in the list, remove it
      })

      // add the moved card to the parent's card group,
      // and any children the moved card might have
      parentCard.children = [
        ...parentCard.children, 
        movedCard, 
        ...movedCard.children
      ]

      // shallow copy the cards
      const newCards = cards.filter(c => ![c.id, parentId].includes(id))

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
  return (<div ref={drop(ref)} style={containerStyle} className="container">
        {cards.map( (card, idx) => (
          <Card
            key={card.id}
            id={card.id}
            content={card.content}
            moveCard={moveCard}
            addCardToGroup={addCardToGroup}
            left={card.left || 0}       // use defaults to get the initial render
            top={card.top || 0}         // use defaults to get the initial render
            cards={card.children || []} // use defaults to get the initial render
            inGroup={false}
          />
        ))}
      </div>
  );
};


const Card = ({ 
  id, 
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
    border:       isUnder? '2px solid black'
                    : '',
    zIndex:       clicked? '1000' : 'auto',
  }

  if(isDragging) {
    // @ts-ignore
    return <div ref={drag} />
  }

  return (
    <div
      className={"card" + ((cards.length > 0)? " group" : "")}
      ref={ref}
      id={id}
      style={{...cardStyle, left, top}}
      onMouseDown={() => setClicked(true)}
      onMouseLeave={() => setClicked(false)}
    >
      <MarkdownView markdown={content} />
      {cards.map( (card, idx) => (
          <Card
            key={card.id}
            id={card.id}
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
