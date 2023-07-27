// ----- Importations -----//
import React from "react";
import ActiveStar from "../assets/star-active.png";
import InactiveStar from "../assets/star-inactive.png";

function RatingStars(rate) {
   const range = [1, 2, 3, 4, 5];

   return range.map((rangeElem, key) => 
      rangeElem > rate.rate ? (
         <img className="emptyStars" src={InactiveStar} alt="étoile vide" key={key} />               
         ) : (
         <img classname="fullStars" src={ActiveStar} alt="étoilé" key={key} />
      )
   );
};

export default RatingStars;


