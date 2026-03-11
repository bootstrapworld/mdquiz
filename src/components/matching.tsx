import React, { useRef } from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Card = ({ name }: { name: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'MATCHING_ITEM',
    item: { name },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  }));

  // Fix: Call the connector on the ref
  drag(ref);

  return (
    <div ref={ref} className="matching-card" style={{
      opacity: isDragging ? 0.5 : 1,
      cursor: 'move',
      padding: '10px',
      margin: '5px',
      backgroundColor: 'white',
      border: '2px solid #013A63',
      borderRadius: '4px'
    }}>
      {name}
    </div>
  );
};

const Bucket = ({ label, matches, onDrop, onClear }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'MATCHING_ITEM',
    drop: (item: { name: string }) => onDrop(item.name),
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  }));

  // Fix: Call the connector on the ref
  drop(ref);

  return (
    <div ref={ref} className="matching-bucket" style={{
      background: isOver ? '#e0f7fa' : '#f9f9f9',
      border: isOver ? '2px dashed #013A63' : '1px solid #ccc',
      padding: '15px',
      margin: '10px 0',
      borderRadius: '8px',
      position: 'relative'
    }}>
      <strong>{label}</strong>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '10px' }}>
        {matches.map((m: string, i: number) => (
          <span key={i} style={{ background: '#85C8BE', color: 'white', padding: '2px 8px', borderRadius: '10px' }}>
            {m}
          </span>
        ))}
      </div>
      {matches.length > 0 && (
        <button onClick={onClear} style={{ position: 'absolute', top: 5, right: 5 }}>✕</button>
      )}
    </div>
  );
};

export const MatchingView = ({ prompt, value, onChange }: any) => {
  const handleDrop = (leftItem: string, cardName: string) => {
    // Get existing matches for this bucket or an empty array
    const currentMatches = value[leftItem] || [];

    // Only add if it's not already in this specific bucket
    if (!currentMatches.includes(cardName)) {
      const nextMapping = {
        ...value,
        [leftItem]: [...currentMatches, cardName]
      };

      // Send the entire updated object back up to ResponseView
      onChange(nextMapping);
    }
  };

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div style={{ flex: 2 }}>
        {prompt.leftColumn.map((item: string) => (
          <Bucket
            key={item}
            label={item}
            matches={value[item] || []}
            onDrop={(card: string) => handleDrop(item, card)}
            onClear={() => {
              const next = { ...value };
              delete next[item];
              onChange(next);
            }}
          />
        ))}
      </div>
      <div style={{ flex: 1, borderLeft: '1px solid #ccc', paddingLeft: '10px' }}>
        {prompt.rightColumn.map((item: string) => <Card key={item} name={item} />)}
      </div>
    </div>
  );
};