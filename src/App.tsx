import './App.scss';
import Header from './components/header/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PlayerSetupPage from './pages/player-setup-page/player-setup-page';
import SummaryPage from './pages/summary-page/summary-page';

function App() {
  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PlayerSetupPage />} />
          <Route path="/summary" element={<SummaryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
