import { useRef, useState } from 'react';
import { Adversary } from '../../models/adversaries';
import { CSSTransition } from 'react-transition-group';
import './adversary-wheel.scss';

enum WheelState {
  Ready,
  Spinning,
  Done,
}

interface AdversaryWheelProps {
  availableAdversaries: Adversary[];
}

function AdversaryWheel({ availableAdversaries }: AdversaryWheelProps) {
  const nodeRef = useRef(null);
  const [wheelState, setWheelState] = useState(WheelState.Ready);

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
        onEntered={() => setWheelState(WheelState.Done)}
        timeout={3000}
      >
        <ul
          ref={nodeRef}
          className={`adversary-wheel slices-${availableAdversaries.length} ${
            wheelState !== WheelState.Ready ? 'disabled' : ''
          }`}
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
    </div>
  );
}

export default AdversaryWheel;
