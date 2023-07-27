/************* Page Apartment *************/

// ----- Importations ----- //
import React from "react";
import ApartmentsList from "../datas/ApartmentsDatas.json";
import "../styles/pages/Apartment.css";
import Error from "../pages/Error";
import Carousel from "../components/Carousel";
import RatingStars from "../components/Rate";
import Collapse from "../components/Collapse";

// ----- Création de la fiche appartement ----- //
function ApartmentCard() {
   // Création de l'adresse url de l'appartement correspondant
   let url = document.location.href
   let idUrl = new URL(url)
   // Ajout de l'id dans l'adresse url
   let id = idUrl.pathname.replace('/Apartment/', '')
   
   
   const apart = ApartmentsList.find((apart) => apart.id === id);
   const {title, location, tags, host, rating, description, equipments} = apart || {};

   if (!apart) {
      return <Error />
   }
   
   return (
      <div className="apartmentCard" >
            <div className="carousel">
               <Carousel />
            </div>
         <div className="apartmentBody">
            <div className="designation">
               <div className="apartmentDesignation">
                  <h3 className="apartmentTitle">
                     { title }
                  </h3> 
                  <h4 className="apartmentLocation">
                     { location }
                  </h4>
               </div>
               <div className="apartmentHost">
                  <div className="hostName">
                     { host.name }
                  </div>
                  <img className="hostPicture"
                  src= { host.picture } alt="Votre hôte"/>
               </div>
            </div>
            <div className="apartmentAssets">
               <div className="apartmentTags">
                  <ul>
                     {tags.map(tag=><li>{tag}</li>)}
                  </ul>
               </div>
               <div className="apartmentRate">
                  <RatingStars rate={rating} />
               </div>
            </div>

            <div className="apartmentCaracteristics">
               <Collapse title="Description" content={description} />
               <Collapse 
                  title="Équipements" 
                  content={
                     equipments &&
                     equipments.map((equipments, index) => {
                        return (
                           <ul key={equipments + index}>
                              <li>{equipments}</li>
                           </ul>
                        )
                     })
                  } 
               />

            </div>



            {/* <div className="apartmentCaracteristics">
               <div className="apartmentDescription">
                  <h5>
                     Description
                     <div className="collapseTitle">
                        <Collapse />
                     </div>
                  </h5>
                  <p>{ description }</p>
               </div>
               <div className="apartmentEquipments">
               <h5>
                     Équipements
                     <Collapse />
                  </h5>
                  <p>
                     <ul>
                        { equipments.map(equipment=><li>{equipment}</li>) }
                     </ul>
                  </p>
               </div>
            </div> */}
         </div>
      </div>
   )
};

export default ApartmentCard;