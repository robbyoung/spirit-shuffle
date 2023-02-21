import { useRef } from 'react';
import { Box, getImageForBox } from '../../models/box';
import './box-button.scss';

interface BoxButtonProps {
  box: Box;
  selected: boolean;
  half: boolean;
  onClick: () => void;
}

function BoxButton({ box, selected, half, onClick }: BoxButtonProps) {
  const nodeRef = useRef(null);

  return (
    <img
      src={getImageForBox(box)}
      alt={box}
      ref={nodeRef}
      className={`box-button ${half ? 'half' : 'full'} ${
        selected ? 'selected' : 'unselected'
      }`}
      onClick={onClick}
    />
  );
}

export default BoxButton;
