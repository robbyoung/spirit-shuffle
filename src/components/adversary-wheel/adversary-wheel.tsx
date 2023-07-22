import { Adversary } from '../../models/adversaries';
import './adversary-wheel.scss';

interface AdversaryWheelProps {
  availableAdversaries: Adversary[];
}

function AdversaryWheel({ availableAdversaries }: AdversaryWheelProps) {
  return (
    <ul className={`adversary-wheel slices-${availableAdversaries.length}`}>
      {availableAdversaries.map((adversary, i) => (
        <li className={`slice-${i} slice-${adversary.key}`} key={adversary.key}>
          <div className="slice-contents">
            <p>{adversary.name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default AdversaryWheel;
