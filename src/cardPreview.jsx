import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './itemTypes.js';
const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'yellow',
  cursor: 'move',
};
export const CardPreview = ({ text }) => {
  return <div style={{ ...style }}>{text}</div>;
};
