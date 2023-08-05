// ***** Composant Carousel de la page Apartment ***** //
// ----- Importations ----- //
import React, { useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

import RatingStars from "../components/Rating";
import Error from '../pages/Error';

import "../styles/pages/Apartment.css";
import "../styles/components/Carousel.css"

// ----- Création du composant Designation pour la page Apartment ----- //
function Designation() {
   const {id}  = useParams();
   const [apart, setApart] = useState({});
   const host = apart.host || {};
   
   useEffect(() => {
      const getApart = async () => {
         const res = await fetch("/datas/ApartmentsDatas.json")
         .then(res => res.json());
         
         const data = res.find(apart => apart.id === id);
         
         if(!data) {
            <Error />
         }
         setApart(data);
      }
      getApart();
   }, [id]);
      
   return (   
      <div className="designation">
         <div className="apartmentDesignation">
            <h3 className="apartmentTitle">{ apart.title }</h3> 
            <h4 className="apartmentLocation">{ apart.location }</h4>
         </div>
         <div className="apartmentHost">
            <div className="hostName">{ host.name }</div>
            <img className="hostPicture" src={ host.picture } alt={ host.picture }/>
         </div>
         <div className="apartmentAssets" >
            <ul className="apartmentTags" >
               { apart.tags && apart.tags.map((tag)=> <li key={ tag }> { tag } </li>) }
            </ul>
            <div className="apartmentRate" >
               <RatingStars rate={ apart.rating }/>
            </div>
         </div> 
      </div>            
   )
};

// ----- Export du composant Designation ----- //
export default Designation;