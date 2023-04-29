import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Banner from './components/Banner'
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
          <Banner />
          <Route exact path="./pages/Home">
            <Home />
          </Route>
          <Footer />
        </Router>
    </React.StrictMode>
)