// ----- Importations ----- //
import React from "react";
import { Link } from "react-router-dom";
import "../styles/GalleryCard.scss";

// ----- Création d'une fiche appartement ----- //
function Card({ id, title, cover }) {
   return (
      <Link to={"../ApartmentCard/:{id}"} className="galleryCard">
         <div className="cardPicture">
            {/* <div classname="diapo"> */}
               <img src={cover} alt={title} />
            {/* </div> */}
            <div className="diapo imgFilter"></div>
            <h3>{title}</h3>
         </div>
      </Link>
   );
};

// ----- Export d'une fiche appartement ----- //
export default Card;