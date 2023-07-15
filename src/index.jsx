import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import Footer from './layout/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
          <Route exact path="./pages/Home">
            <HomePage />
          </Route>
          <Footer />
        </Router>
    </React.StrictMode>
)