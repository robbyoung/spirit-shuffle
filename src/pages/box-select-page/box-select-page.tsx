import { Box, getBoxesUrlKey, validateBoxSelection } from '../../models/box';
import { useState } from 'react';
import BoxGrid from '../../components/box-grid/box-grid';
import { BsCheckLg } from 'react-icons/bs';
import './box-select-page.scss';
import IconButton from '../../components/icon-button/icon-button';

function BoxSelectPage() {
  const [selectedBoxes, setSelectedBoxes] = useState([Box.SI]);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  function navigateAway() {
    const params = getBoxesUrlKey(selectedBoxes);
    window.location.assign(`spirit?b=${params}`);
  }

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
            navigateAway();
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
