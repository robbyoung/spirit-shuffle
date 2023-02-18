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
  onSelectionChange,
}: SpiritCardFilterOverlayProps) {
  return (
    <>
      <div className={`background ${show ? '' : 'hidden'}`} />
      <div className={`spirit-card-filter-overlay ${show ? '' : 'hidden'}`}>
        <div className="button-header">
          <IconButton
            icon={<RxCross1 />}
            tooltip="Go Back"
            onClick={onDismiss}
          />
        </div>
        <div className="spirit-list">
          {availableSpirits.map((spirit, i) => (
            <SpiritCard
              key={`card-${i}`}
              spirit={spirit}
              className={`${
                selectedSpirits.includes(spirit) ? 'selected' : 'unselected'
              }`}
              onClick={() =>
                onSelectionChange(filterSelection(selectedSpirits, spirit))
              }
            ></SpiritCard>
          ))}
        </div>
      </div>
    </>
  );
}

function filterSelection(current: Spirit[], clicked: Spirit): Spirit[] {
  const index = current.indexOf(clicked);
  const copy = [...current];
  if (index > -1) {
    copy.length > 3 && copy.splice(index, 1);
    return copy;
  } else {
    return [...copy, clicked];
  }
}

export default SpiritCardFilterOverlay;
