import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './itemTypes.js';
const style = {
  position: 'absolute',
  top: '100px',
  left: '700px',
  border: '1px dashed gray',
  width: '500px',
  height: '500px',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
};
export const Trash = ({ onDeleteItem }) => {
  const [collectedProps, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    collect: (monitor) => ({
      handlerId: monitor.getHandlerId(),
      drop: monitor.getDropResult(),
      item: monitor.getItem(),
      dropResult: monitor.getDropResult(),
    }),
    drop: (item) => onDeleteItem(item.id),
  }));
  return (
    <div ref={drop} style={{ ...style }}>
      DELETE ITEM
    </div>
  );
};
