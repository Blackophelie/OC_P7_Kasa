/************* Composant Gallery de la page Home *************/

// ----- Importations ----- //
import React from "react";
import Card from "../components/Card";
import Apartments from "../datas/ApartmentsDatas.json";

import "../styles/GalleryCard.scss";

// ----- Création de la galerie ----- //
function Gallery() {
   return (
      <div className="galleryContainer">
         {Apartments.map(apart=>{
            return (
               // Contenu de chaque fiche en fonction de l'id de l'appartement
               <Card
                  key={apart.id}
                  id={apart.id}
                  title={apart.title}
                  cover={apart.cover}
               />
            )
         })}
      </div>
   );
};

// ----- Export de la galerie ----- //
export default Gallery;