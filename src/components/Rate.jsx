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
         {range.map((rangeElem) => 
         rangeElem > rate.rate ? (
            <img className="emptyStars" src={InactiveStar} empty={InactiveStar} alt="étoile vide"  />               
            ) : (
            <img className="fullStars" src={ActiveStar} full={ActiveStar} alt="étoilé"  />
            )
         )} 
      </>
   );
};

// ----- Export du composant RatingStars ----- //
export default RatingStars;


