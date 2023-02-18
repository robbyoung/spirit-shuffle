import { Spirit } from '../../models/spirit';
import IconButton from '../icon-button/icon-button';
import SpiritCard from '../spirit-card/spirit-card';
import { RxCross1 } from 'react-icons/rx';
import './spirit-card-filter-overlay.scss';

interface SpiritCardFilterOverlayProps {
  show: boolean;
  availableSpirits: Spirit[];
  selectedSpirits: Spirit[];
  onDismiss: () => void;
  onSelectionChange: (selection: Spirit[]) => void;
}

function SpiritCardFilterOverlay({
  show,
  availableSpirits,
  selectedSpirits,
  onDismiss,
}: SpiritCardFilterOverlayProps) {
  return (
    <div className={`spirit-card-filter-overlay ${show ? '' : 'hidden'}`}>
      <div className="button-header">
        <IconButton icon={<RxCross1 />} onClick={onDismiss} />
      </div>
      <div className="spirit-list">
        {availableSpirits.map((spirit, i) => (
          <SpiritCard
            key={`card-${i}`}
            spirit={spirit}
            className={`${
              selectedSpirits.includes(spirit) ? 'selected' : 'unselected'
            }`}
          ></SpiritCard>
        ))}
      </div>
      <div className="background" />
    </div>
  );
}

export default SpiritCardFilterOverlay;
