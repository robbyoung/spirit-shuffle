import { Box, validateBoxSelection } from '../../models/box';
import { useState } from 'react';
import BoxGrid from '../../components/box-grid/box-grid';
import { BsCheckLg } from 'react-icons/bs';
import './box-select-page.scss';
import IconButton from '../../components/icon-button/icon-button';
import useQueryState from '../../hooks/use-query-state';

function BoxSelectPage() {
  const { setBoxes } = useQueryState();
  const [selectedBoxes, setSelectedBoxes] = useState([Box.SI]);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  function onSelectionChange(boxes: Box[]) {
    setSelectedBoxes(boxes);
    setErrorMessage(undefined);
  }

  return (
    <div className="body box-select-page">
      <h2 className="title">Select your boxes</h2>
      <p className={`error-message ${errorMessage ? 'show' : 'hide'}`}>
        {errorMessage}
      </p>
      <BoxGrid selected={selectedBoxes} onSelectionChange={onSelectionChange} />
      <IconButton
        icon={<BsCheckLg />}
        tooltip="Done"
        onClick={() => {
          const validationMessage = validateBoxSelection(selectedBoxes);
          if (validationMessage != undefined) {
            setErrorMessage(validationMessage);
          } else {
            setBoxes(selectedBoxes, 'spirit');
          }
        }}
      />
      <p className={`error-message ${errorMessage ? 'show' : 'hide'}`}>
        {errorMessage}
      </p>
    </div>
  );
}

export default BoxSelectPage;
