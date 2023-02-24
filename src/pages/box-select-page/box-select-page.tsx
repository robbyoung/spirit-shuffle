import { Box, getBoxesUrlKey } from '../../models/box';
import { useState } from 'react';
import BoxGrid from '../../components/box-grid/box-grid';
import { BsCheckLg } from 'react-icons/bs';
import './box-select-page.scss';
import IconButton from '../../components/icon-button/icon-button';

function BoxSelectPage() {
  const [selectedBoxes, setSelectedBoxes] = useState([
    Box.SI,
    Box.JE,
    Box.BC,
    Box.FF,
  ]);

  return (
    <div className="body box-select-page">
      <h2 className="title">Select your boxes</h2>
      <BoxGrid selected={selectedBoxes} onSelectionChange={setSelectedBoxes} />
      <IconButton
        icon={<BsCheckLg />}
        tooltip="Done"
        onClick={() => {
          const params = getBoxesUrlKey(selectedBoxes);

          window.location.assign(`spirit?b=${params}`);
        }}
      />
    </div>
  );
}

export default BoxSelectPage;
