/************* Composant Card de Gallery dans la page Home *************/

// ----- Importations ----- //
import React from "react";
import { Link } from "react-router-dom";
import "../styles/GalleryCard.scss";

// ----- Création d'une fiche appartement ----- //
function Card({ id, title, cover }) {
   return (
      <Link to={"../Apartment/" + id} className="galleryCard">
         <div className="cardPicture">
            <img src={cover} alt={title} />
            <div className="diapo imgFilter"></div>
            <h3>{title}</h3>
         </div>
      </Link>
   );
};

// ----- Export d'une fiche appartement ----- //
export default Card;