import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Items from './components/Items';
import Footer from './components/Footer';
import Slideshow from './components/Slideshow';
import Infopersonal from './components/Infopersonal';
import HistoryTiket from './components/HistoryTiket';
import Fare from './components/Fare';
import News from './components/News';
import Promotion from './components/Promotion';
import Introduce from './components/Introduce';
import Reservation from './components/Reservations';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Slideshow />
          <Routes>
            <Route path="/schedule" element={<Slideshow />} />
            <Route path="/infopersonal" element={<Infopersonal />} />
            <Route path="/historytiket" element={<HistoryTiket />} />
            <Route path="/fare" element={<Fare />} />
            <Route path="/news" element={<News />} />
            <Route path="/promotion" element={<Promotion />} />
            <Route path="/introduce" element={<Introduce />} />
            <Route path="/reservation" element={<Reservation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
