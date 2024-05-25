import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import MovieShowing from './components/MovieShowing';
import LoginComponent from './components/LoginComponent';
import SignupComponent from './components/SignupComponent'


function App() {
  const location = useLocation(); // Sử dụng hook useLocation để lấy thông tin về đường dẫn hiện tại
  const isHomePage = location.pathname === '/'; // Kiểm tra xem có phải trang chủ không
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        {isHomePage && <Slideshow />}
        {isHomePage && <MovieShowing />}
        <Routes>
          <Route path="/schedule" element={<Slideshow />} />
          <Route path="/infopersonal" element={<Infopersonal />} />
          <Route path="/historytiket" element={<HistoryTiket />} />
          <Route path="/fare" element={<Fare />} />
          <Route path="/news" element={<News />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<SignupComponent />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
