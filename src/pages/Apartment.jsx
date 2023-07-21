// ----- Importations ----- //
import React from "react";
import { ApartmentsList } from "../data/ApartmentDatas";
import "../styles/Apartment.scss";
import Error from "../pages/Error";
// import Carousel from "../components/Carousel";



// ----- Création de la fiche appartement ----- //
function ApartmentCard() {
   let url = document.location.href
   let idUrl = new URL(url)
   let id = idUrl.pathname.replace('/Apartment/', '')
    
   const apart = ApartmentsList.find((apart) => apart.id === id);

   if (!apart) {
      return <Error />
   }
   
   return (
      <div className="apartmentCard" key={ id }>
         <div className="apartmentBody">
            <div className="carousel">
               <img url={ apart.pictures } alt="accomodation" />
            </div>
            <div className="designation">
               <h3 className="apartmentTitle">{ apart.title }</h3>
               <div className="apartmentLocation">{ apart.location }</div>
               <div className="apartmentTag">{ apart.tags }</div>
            </div>
            <div className="apartmentHost">
               { apart.name }
               { apart.picture }
               { apart.rating }
            </div>
            <div className="apartmentCaracteristics">
               <div className="apartmentDescription">
                  Description
                  { apart.description }
               </div>
               <div className="apartmentEquipments">
                  Équipements
                  { apart.equipments }
               </div>
            </div>
         </div>
      </div>
   )
};

export default ApartmentCard;