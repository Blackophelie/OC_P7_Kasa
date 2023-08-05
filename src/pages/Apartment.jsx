// ***** Page Apartment ***** //

// ----- Importations ----- //
import React from "react";

import Carousel from "../components/Carousel";
import Designation from "../components/Designation";
import Assets from "../components/Assets";

import "../styles/pages/Apartment.css";
import "../styles/components/Carousel.css";

// ----- Création de la fiche appartement ----- //
function ApartmentCard() {
   return (
      <div className="apartmentCard">
         <div className="carousel" >
            <Carousel carousel="picture"/>
         </div>
         <div className="apartmentBody">
            <Designation />
            <Assets />            
         </div>
      </div>
   );
};

// ----- Exportation du composant ----- //
export default ApartmentCard;