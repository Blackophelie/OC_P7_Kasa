// ----- Importations ----- //
import React from "react";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";

import "../styles/Body.css";

// ----- Création du crops de la page ----- //
function Body() {
   return (
   <div>
      <Banner />
      <Gallery />
   </div>)
}

// ----- Export du corps de la page ----- //
export default Body;