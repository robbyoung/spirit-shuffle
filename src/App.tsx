import './App.scss';
import { Spirit } from './models/spirit';
import { HiPencil } from 'react-icons/hi';
import SpiritDeck from './components/spirit-deck/spirit-deck';
import Header from './components/header/header';
import IconButton from './components/icon-button/icon-button';
import { useState } from 'react';
import SpiritCardFilterOverlay from './components/spirit-card-filter-overlay/spirit-card-filter-overlay';

function App() {
  const availableSpirits = Object.values(Spirit);

  const [showFilterOverlay, setShowFilterOverlay] = useState(false);
  const [selectedSpirits, setSelectedSpirits] = useState(availableSpirits);

  return (
    <div className="app">
      <Header />
      <div className="body">
        <SpiritDeck spirits={[...availableSpirits].reverse()} selectCount={1} />
        <IconButton
          icon={<HiPencil />}
          onClick={() => setShowFilterOverlay(true)}
        ></IconButton>
      </div>
      <SpiritCardFilterOverlay
        show={showFilterOverlay}
        availableSpirits={availableSpirits}
        selectedSpirits={selectedSpirits}
        onDismiss={() => setShowFilterOverlay(false)}
        onSelectionChange={setSelectedSpirits}
      />
    </div>
  );
}

export default App;
