import './App.scss';
import { Spirit } from './models/spirit';
import SpiritDeck from './components/spirit-deck/spirit-deck';
import Header from './components/header/header';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="body">
        <SpiritDeck spirits={Object.values(Spirit).reverse()} selectCount={1} />
      </div>
    </div>
  );
}

export default App;
