import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
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
import SignupComponent from './components/SignupComponent';
import AuthLayout from './components/AuthLayout';
import MainLayout from './components/MainLayout';
import ForgotPasswordPage from './components/ForgotPasswordComponent'; 

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={
            <>
              {isHomePage && <Slideshow />}
              {isHomePage && <MovieShowing />}
            </>
          } />
          <Route path="/schedule" element={<Slideshow />} />
          <Route path="/infopersonal" element={<Infopersonal />} />
          <Route path="/historytiket" element={<HistoryTiket />} />
          <Route path="/fare" element={<Fare />} />
          <Route path="/news" element={<News />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<SignupComponent />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
