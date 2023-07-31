/************* Composant Gallery de la page Home *************/

// ----- Importations ----- //
import React, {useState, useEffect} from "react";
import Card from "../components/Card"
// import useFetch from "../components/UseFetch";

import "../styles/components/GalleryCard.css";



// ----- Création de la galerie de la page d'accueil ----- //
function Gallery() {
      const [apart, setApart] = useState();
      // console.log(apart);
      useEffect(() => {
         fetch("http://localhost:3000/datas/ApartmentsDatas.json")
            .then ((res) => res.json())
            .then ((apart) => setApart(apart))
            .catch((error) => error)
      }, []);
   // const aparts = useFetch("http://localhost:3000/datas/ApartmentsDatas.json")
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