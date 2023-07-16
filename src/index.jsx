import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import About from './pages/About';
import Header from './layout/Header';
import Body from './layout/Body';
import Footer from './layout/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/" element={<About />} />
          </Routes>
          <Body />
          <Footer />
          <Footer />
        </Router>
    </React.StrictMode>
);