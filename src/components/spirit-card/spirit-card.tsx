import { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { getImageForSpirit, Spirit } from '../../models/spirit';
import './spirit-card.scss';

interface SpiritCardProps {
  spirit: Spirit;
  animate?: boolean;
  className?: string;
  onClick?: () => void;
  onFinished?: () => void;
}

function SpiritCard({
  spirit,
  className,
  animate,
  onClick,
  onFinished,
}: SpiritCardProps) {
  const nodeRef = useRef(null);
  const [notDone, updateNotDone] = useState(true);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      classNames="card-animate"
      in={animate && notDone}
      onEntered={() => updateNotDone(false)}
      onExited={onFinished}
      timeout={2000}
    >
      <img
        src={getImageForSpirit(spirit)}
        alt={spirit}
        ref={nodeRef}
        className={`spirit-card ${className}`}
        onClick={onClick}
      />
    </CSSTransition>
  );
}

export default SpiritCard;
