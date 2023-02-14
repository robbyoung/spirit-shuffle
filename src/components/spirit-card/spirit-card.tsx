import { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { getImageForSpirit, Spirit } from '../../models/spirit';
import './spirit-card.scss';

interface SpiritCardProps {
  spirit: Spirit;
  animate?: boolean;
  className?: string;
}

function SpiritCard({ spirit, className, animate }: SpiritCardProps) {
  const nodeRef = useRef(null);
  const [notDone, updateNotDone] = useState(true);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      classNames={`card-animate`}
      in={animate && notDone}
      onEntered={() => updateNotDone(false)}
      timeout={2000}
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
