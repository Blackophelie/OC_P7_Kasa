/************* Élément Body de la page d'accueil Home *************/

// ----- Importations ----- //
import React from "react";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";

// import "../styles/Body.css";

// ----- Création du corps de la page ----- //
function Body() {
   return (
   <div className="body">
      {/* Insertion des composants Banner et Gallery */}
      <Banner />
      <Gallery />
   </div>)
}

// ----- Export du corps de la page ----- //
export default Body;