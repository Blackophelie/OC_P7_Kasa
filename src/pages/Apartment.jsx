/************* Page Apartment *************/

// ----- Importations ----- //
import React from "react";
import "../styles/pages/Apartment.css";
import "../styles/components/Carousel.css"
import Carousel from "../components/Carousel";
import RatingStars from "../components/Rate";
import Collapse from "../components/Collapse";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Error from "../pages/Error";

// ----- Création de la fiche appartement ----- //
function ApartmentCard() {
   const {id}  = useParams();
   const { isLoading } = useState(true);
   const [apart, setApart] = useState({});
   
   useEffect(() => {
      const getApart = async () => {
         const res = await fetch("../datas/ApartmentsDatas.json")
         .then(res => res.json());
         
         const data = res.find(apart => apart.id === id);
         
         if(!data) {
            <Error />
         }
         setApart(data);
      }
      getApart();
   }, [id]);
      
   if (isLoading) return <h3>Chargement...</h3>
   
   const host = apart.host || {};

   return (
      <div className="apartmentCard">
         <div className="carousel" >
            <Carousel key={apart.pictures} />
         </div>
         <div className="apartmentBody">
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
                  <div className="hostName" name={ host.name }>
                     { host.name }
                  </div>
                  <div>
                     <img className="hostPicture" src= { host.picture } alt={ host.picture }/>
                  </div>
               </div>
            </div>
            <div className="apartmentAssets">
               <ul className="apartmentTags">
                  {apart.tags && apart.tags.map((tag, index)=><li tag={tag + index}>{tag}</li>)}
               </ul>
               <div className="apartmentRate">
                  <RatingStars rate={apart.rating}/>
               </div>
            </div> 
            <div className="apartmentCaracteristics">
               <Collapse title="Description" content={apart.description} />
               <Collapse title="Équipements" content={
                  apart.equipments && apart.equipments.map(
                     (equipments, index) => <ul ><li key={equipments + index}>{equipments}</li></ul>)
               }/>
            </div>
         </div>
      </div>
   );
};

export default ApartmentCard;