import { useRef, useState } from 'react';
import { Adversary, getRandomAdversary } from '../../models/adversaries';
import { CSSTransition } from 'react-transition-group';
import './adversary-wheel.scss';

enum WheelState {
  Ready,
  Spinning,
  Done,
}

interface AdversaryWheelProps {
  availableAdversaries: Adversary[];
  onSelected: (adversary: Adversary) => void;
}

function AdversaryWheel({
  availableAdversaries,
  onSelected,
}: AdversaryWheelProps) {
  const nodeRef = useRef(null);
  const [wheelState, setWheelState] = useState(WheelState.Ready);

  const selected = useState(getRandomAdversary(availableAdversaries, 0, 12))[0]
    .adversary;
  const selectedIndex = availableAdversaries.indexOf(selected);

  function handleWheelClick() {
    if (wheelState === WheelState.Ready) {
      setWheelState(WheelState.Spinning);
    }
  }

  return (
    <div>
      <CSSTransition
        nodeRef={nodeRef}
        classNames="wheel-spin"
        in={wheelState !== WheelState.Ready}
        onEntered={() => {
          setWheelState(WheelState.Done);
          onSelected(selected);
        }}
        timeout={3000}
      >
        <ul
          ref={nodeRef}
          className={`adversary-wheel slices-${availableAdversaries.length} ${
            wheelState !== WheelState.Ready ? 'disabled' : ''
          } selected-${selectedIndex}`}
          onClick={handleWheelClick}
        >
          {availableAdversaries.map((adversary, i) => (
            <li
              className={`slice-${i} slice-${adversary.key}`}
              key={adversary.key}
            >
              <div className="slice-contents">
                <p>{adversary.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </CSSTransition>
      <div className="arrow-down" />
    </div>
  );
}

export default AdversaryWheel;
