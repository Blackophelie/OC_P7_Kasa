// -----Import de React ----- //
import React from "react";

// ----- Import des layouts ----- //
import Header from "../layout/Header";
import Footer from "../layout/Footer";
// import "../styles/App.css";

import Home from "../pages/Home";
import About from "../pages/About";
import ApartmentCard from "../pages/Apartment";
import Error from "../pages/Error";

// ----- Importation du routeur ----- //
import { Routes, Route } from "react-router-dom";

// ----- Création du composant App contenant le Router ----- //
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Apartment/:id" element={<ApartmentCard />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

// ----- Export du composant App créé ----- //
export default App;
