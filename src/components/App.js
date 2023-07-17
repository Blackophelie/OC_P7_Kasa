// -----Import de React ----- //
import React from "react";

// ----- Import des layouts ----- //
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import "../styles/App.scss";

import Home from "../pages/Home";
import About from "../pages/About";
import ApartmentCard from "../pages/ApartmentCard";

// ----- Importation du routeur ----- //
import { Routes, Route } from "react-router-dom";

// ----- Création du composant App ----- //
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/ApartmentCard/:id" element={<ApartmentCard />} />
      </Routes>
      <Footer />
    </div>
  );
}

// ----- Export du composant App créé ----- //
export default App;
