/************* Composant Bannière de l'élément Body de la page Home *************/

// ----- Importations ----- //
import React from "react";
import "../styles/components/Banner.css";

// ----- Création de la bannière ----- //
function Banner() {
   return (
      <div className="bannerTitle">
         <h1>Chez vous, partout et ailleurs</h1>
      </div>
   );
};

// ----- Export de la bannière ----- //
export default Banner;