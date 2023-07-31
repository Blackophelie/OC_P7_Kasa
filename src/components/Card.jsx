/************* Composant Card de Gallery dans la page Home *************/

// ----- Importations ----- //
import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/GalleryCard.css";

// ----- Création d'une fiche appartement ----- //
function Card({id, title, cover}) {
   return (
      <Link to={`/Apartment/${id}`} className="galleryCard" id={id}>
         <div className="cardPicture">
            <img src={cover} alt={title} cover={cover} />
            <h3 title={title}>{title}</h3>
         </div>
      </Link>
   );
};

// ----- Export d'une fiche appartement ----- //
export default Card;