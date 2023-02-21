import './App.scss';
import Header from './components/header/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PlayerSetupPage from './pages/player-setup-page/player-setup-page';
import SummaryPage from './pages/summary-page/summary-page';
import BoxSelectPage from './pages/box-select-page/box-select-page';

function App() {
  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BoxSelectPage />} />
          <Route path="/spirit" element={<PlayerSetupPage />} />
          <Route path="/summary" element={<SummaryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
