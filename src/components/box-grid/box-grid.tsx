import { Box } from '../../models/box';
import BoxButton from '../box-button/box-button';
import './box-grid.scss';

interface BoxGridProps {
  selected: Box[];
  onSelectionChange: (selection: Box[]) => void;
}

function BoxGrid({ selected, onSelectionChange }: BoxGridProps) {
  const boxes = Object.values(Box);

  function onSelect(box: Box) {
    onSelectionChange(boxes.filter((b) => selected.includes(b) || b == box));
  }

  function onDeselect(box: Box) {
    onSelectionChange(boxes.filter((b) => selected.includes(b) && b != box));
  }

  return (
    <div className="box-grid">
      {boxes.map((box) => (
        <BoxButton
          key={box}
          box={box}
          selected={selected.includes(box)}
          half={box === Box.FF || box === Box.BC}
          onClick={() =>
            selected.includes(box) ? onDeselect(box) : onSelect(box)
          }
        />
      ))}
    </div>
  );
}

export default BoxGrid;
