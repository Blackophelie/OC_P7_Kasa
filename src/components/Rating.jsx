// ***** Composant RatingStars ***** //
// ----- Importations -----//
import React from "react";
import ActiveStar from "../assets/star-active.png";
import InactiveStar from "../assets/star-inactive.png";

// ----- Création du composant RatingStars ----- //
function RatingStars(rate) {
   const range = [1, 2, 3, 4, 5];

   return (
      <>
         {range.map((rangeElem, index) => 
         rangeElem > rate.rate ? (
            <img className="emptyStars" src={InactiveStar} alt="étoile vide" key={rangeElem} />               
            ) : (
            <img className="fullStars" src={ActiveStar} alt="étoilé" key={index} />
            )
         )} 
      </>
   );
};

// ----- Export du composant RatingStars ----- //
export default RatingStars;


