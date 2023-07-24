/************* Page Apartment *************/

// ----- Importations ----- //
import React from "react";
import ApartmentsList from "../datas/ApartmentsDatas.json";
import "../styles/Apartment.scss";
import Error from "../pages/Error";
import Carousel from "../components/Carousel";
import RatingStars from "../components/Rate";
import ArrowDown from "../assets/arrow_down.png";
import ArrowUp from "../assets/arrow_up.png";




// ----- Création de la fiche appartement ----- //
function ApartmentCard() {
   // Création de l'adresse url de l'appartement correspondant
   let url = document.location.href
   let idUrl = new URL(url)
   // Ajout de l'id dans l'adresse url
   let id = idUrl.pathname.replace('/Apartment/', '')
    
   const apart = ApartmentsList.find((apart) => apart.id === id);
   const tags = apart.tags;
   const equipments = apart.equipments;

   if (!apart) {
      return <Error />
   }
   
   return (
      <div className="apartmentCard" key={ id }>
         <div className="apartmentBody">
            <div className="carousel">
               <Carousel />
            </div>
            <div className="designation">
               <div className="apartmentDesignation">
                  <h3 className="apartmentTitle">
                     { apart.title }
                  </h3> 
                  <h4 className="apartmentLocation">
                     { apart.location }
                  </h4>
               </div>
               <div className="apartmentHost">
                  <div className="hostName">
                     { apart.host.name }
                  </div>
                  <img className="hostPicture"
                  src= { apart.host.picture } alt="Votre hôte"/>
               </div>
            </div>
            <div className="apartmentAssets">
               <div className="apartmentTags">
                  {tags.map(tag=><li>{tag}</li>)}
               </div>
               <div className="apartmentRate">
                  <RatingStars rate={apart.rating} />
               </div>
            </div>
            <div className="apartmentCaracteristics">
               <div className="apartmentDescription">
                  <h5>Description</h5>
                  <img className="arrowDown" src={ ArrowDown } alt="Ouvrir" />
                  <img className="arrowUp" src={ ArrowUp } alt="Fermer" />
                  <p>{ apart.description }</p>
               </div>
               <div className="apartmentEquipments">
                  <h5>Équipements</h5>
                  <img className="arrowDown" src={ ArrowDown } alt="Ouvrir" />
                  <img className="arrowUp" src={ ArrowUp } alt="Fermer" />
                  <p>
                     { equipments.map(equipment=><li>{equipment}</li>) }
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
};

export default ApartmentCard;