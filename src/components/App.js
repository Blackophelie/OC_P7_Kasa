import React from "react";

// ----------------Import des layouts----------- //
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Body from "../layout/Body";
import "../styles/App.css";

// ----------Import du routeur------------------- //
import { BrowserRouter } from "react-router-dom";

// ------------ Composant App ------------------ //
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Body />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

// -------- Export du composant créé ---------- //
export default App;
