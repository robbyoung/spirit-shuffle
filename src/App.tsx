import './App.scss';
import { Spirit } from './models/spirit';
import { HiPencil } from 'react-icons/hi';
import SpiritDeck from './components/spirit-deck/spirit-deck';
import Header from './components/header/header';
import IconButton from './components/icon-button/icon-button';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="body">
        <SpiritDeck spirits={Object.values(Spirit).reverse()} selectCount={1} />
        <IconButton icon={<HiPencil />}></IconButton>
      </div>
    </div>
  );
}

export default App;
