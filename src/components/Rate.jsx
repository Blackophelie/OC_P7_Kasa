// ----- Importations -----//
import React from "react";
import ActiveStar from "../assets/star-active.png";
import InactiveStar from "../assets/star-inactive.png";

function RatingStars(rate) {
   const range = [1, 2, 3, 4, 5];

   return (
      <>
      {range.map((rangeElem, index) => 
      rangeElem > rate.rate ? (
         <img className="emptyStars" empty={index + 1} src={InactiveStar} alt="étoile vide"  />               
         ) : (
         <img className="fullStars" full={rangeElem} src={ActiveStar} alt="étoilé"  />
         )
      )} 
      </>
   );
};

export default RatingStars;


