import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { getImageForSpirit, Spirit } from '../../models/spirit';
import './spirit-card.scss';

interface SpiritCardProps {
  spirit: Spirit;
  animate?: boolean;
  className?: string;
  timeout?: number;
}

function SpiritCard({ spirit, className, animate, timeout }: SpiritCardProps) {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      classNames={`card-animate`}
      in={animate}
      timeout={timeout || 1000}
    >
      <img
        src={getImageForSpirit(spirit)}
        alt={spirit}
        ref={nodeRef}
        className={`spirit-card ${className}`}
      />
    </CSSTransition>
  );
}

export default SpiritCard;
