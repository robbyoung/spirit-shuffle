import useBreakpoint from '../../hooks/use-breakpoint';
import { Box } from '../../models/box';
import BoxButton from '../box-button/box-button';
import './box-grid.scss';

interface BoxGridProps {
  selected: Box[];
  onSelectionChange: (selection: Box[]) => void;
}

function BoxGrid({ selected, onSelectionChange }: BoxGridProps) {
  const boxes = Object.values(Box);
  const breakpoint = useBreakpoint();

  function onSelect(box: Box) {
    onSelectionChange(boxes.filter((b) => selected.includes(b) || b == box));
  }

  function onDeselect(box: Box) {
    onSelectionChange(boxes.filter((b) => selected.includes(b) && b != box));
  }

  return (
    <div className="box-grid">
      {breakpoint.mobile && (
        <BoxColumn
          boxes={boxes}
          isSelected={(box) => selected.includes(box)}
          onClick={(box) =>
            selected.includes(box) ? onDeselect(box) : onSelect(box)
          }
        />
      )}
      {!breakpoint.mobile && (
        <>
          <BoxColumn
            boxes={[Box.SI, Box.FF, Box.HZ]}
            isSelected={(box) => selected.includes(box)}
            onClick={(box) =>
              selected.includes(box) ? onDeselect(box) : onSelect(box)
            }
          />
          <BoxColumn
            boxes={[Box.BC, Box.JE, Box.NI]}
            isSelected={(box) => selected.includes(box)}
            onClick={(box) =>
              selected.includes(box) ? onDeselect(box) : onSelect(box)
            }
          />
        </>
      )}
    </div>
  );
}

interface BoxColumnProps {
  boxes: Box[];
  isSelected: (box: Box) => boolean;
  onClick: (box: Box) => void;
}

function BoxColumn({ boxes, isSelected, onClick }: BoxColumnProps) {
  return (
    <div className="box-column">
      {boxes.map((box) => (
        <BoxButton
          key={box}
          box={box}
          selected={isSelected(box)}
          half={box === Box.FF || box === Box.BC}
          onClick={() => onClick(box)}
        />
      ))}
    </div>
  );
}

export default BoxGrid;
