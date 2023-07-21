// ----- Importations ----- //
import React from "react";
import Card from "../components/Card";
import Apartments from "../data/ApartmentDatas";

import "../styles/GalleryCard.scss";

// ----- Création de la galerie ----- //
function Gallery() {
   return (
      <div className="galleryContainer">
         {Apartments.map(data =>{
            return (
               <Card
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  cover={data.cover}
               />
            )
         })}
      </div>
   );
};

// ----- Export de la galerie ----- //
export default Gallery;