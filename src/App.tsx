import './App.scss';
import Header from './components/header/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PlayerSetupPage from './pages/player-setup-page/player-setup-page';

function App() {
  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PlayerSetupPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
