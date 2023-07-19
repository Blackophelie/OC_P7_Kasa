// ----- Importations ----- //
import React from "react";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";

import "../styles/Body.scss";

// ----- Création du corps de la page ----- //
function Body() {
   return (
   <body>
      <Banner />
      <Gallery />
   </body>)
}

// ----- Export du corps de la page ----- //
export default Body;