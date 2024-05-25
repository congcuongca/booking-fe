import React from 'react';
import ReactDOM from 'react-dom/client'; // Cập nhật import
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Sử dụng createRoot
root.render(
  <Router>
    <App />
  </Router>
);
