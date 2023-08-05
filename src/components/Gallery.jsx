/************* Composant Gallery de la page Home *************/

// ----- Importations ----- //
import React from "react";

import Card from "../components/Card";
import useFetch from "../hooks/UseFetch";

import "../styles/components/GalleryCard.css";

// ----- Création de la galerie de la page d'accueil ----- //
function Gallery() {
      const apart = useFetch("http://localhost:3000/datas/ApartmentsDatas.json");
      return (
      <div className="galleryContainer">
         {apart && apart.map(apart=>{
         
            return (
               // Contenu de chaque fiche en fonction de l'id de l'appartement
               <Card className="galleryCard"
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