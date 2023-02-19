import './App.scss';
import { Spirit } from './models/spirit';
import { HiPencil } from 'react-icons/hi';
import SpiritDeck from './components/spirit-deck/spirit-deck';
import Header from './components/header/header';
import IconButton from './components/icon-button/icon-button';
import { useState } from 'react';
import SpiritCardFilterOverlay from './components/spirit-card-filter-overlay/spirit-card-filter-overlay';
import BoardDealer from './components/board-dealer/board-dealer';
import useAvailableSpirits from './hooks/use-available-spirits';
import useAvailableBoards from './hooks/use-available-boards';

function App() {
  const availableSpirits = useAvailableSpirits();
  const availableBoards = useAvailableBoards();

  const [showFilterOverlay, setShowFilterOverlay] = useState(false);
  const [selectedSpirits, setSelectedSpirits] = useState(availableSpirits);
  const [allowEdits, setAllowEdits] = useState(true);
  const [spirit, setSpirit] = useState<Spirit | undefined>(undefined);

  return (
    <div className="app">
      <Header />
      <div className="body">
        <SpiritDeck
          spirits={selectedSpirits}
          onShuffle={() => setAllowEdits(false)}
          onDealt={(spirit) => setSpirit(spirit)}
        />
        {allowEdits && (
          <IconButton
            icon={<HiPencil />}
            tooltip="Edit Deck Contents"
            onClick={() => allowEdits && setShowFilterOverlay(true)}
          ></IconButton>
        )}
        <BoardDealer
          availableBoards={availableBoards}
          animate={spirit !== undefined}
          onDealt={() => undefined}
        />
      </div>
      {showFilterOverlay && (
        <SpiritCardFilterOverlay
          availableSpirits={availableSpirits}
          selectedSpirits={selectedSpirits}
          onDismiss={() => setShowFilterOverlay(false)}
          onSelectionChange={setSelectedSpirits}
        />
      )}
    </div>
  );
}

export default App;
