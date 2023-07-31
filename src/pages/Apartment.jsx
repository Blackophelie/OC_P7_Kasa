/************* Page Apartment *************/

// ----- Importations ----- //
import React from "react";
// import ApartmentsList from "../datas/ApartmentsDatas.json";
import "../styles/pages/Apartment.css";
// import Error from "../pages/Error";
import Carousel from "../components/Carousel";
// import Designation from "../components/Designation";
// import Caracteristics from "../components/Caracteristics";
import RatingStars from "../components/Rate";
import Collapse from "../components/Collapse";
import { useParams } from "react-router-dom";
// import useFetch from "../components/UseFetch";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import props from "prop-types";

// ----- Création de la fiche appartement ----- //
function ApartmentCard() {
   const {id}  = useParams();
   const {apart} = useState();
   const {title, location, tags, host, rating, description, equipments} = apart || {};
   // const host = apart.host || {};
   const { name, picture } = host || {};
   console.log(apart);
   
   // const apartId = apart.id;
   // const navigate = useNavigate();
   // let { data: aparts, isLoading, error} = useFetch("http://localhost:3000/datas/ApartmentsDatas.json")
   // console.log(aparts);
   // const apart = aparts.find(apart => apart.id === id );
   // const { name, location } = apart.id === apartId;
   // const [apart, setApart] = useState([]);
   // const aparts = useFetch("http://localhost:3000/datas/ApartmentsDatas.json")
   
   useEffect(() => {
      fetch("http://localhost:3000/Apartment/:id")
         .then ((res) => res.json())
         .then (apart => (apart))
         .catch((error) => error)
   }, []);
   // useEffect(() =>{
      //    if (error) {
         //      navigate("/error")
         //    }
         // }, [error, navigate])
         // console.log(apart);
         // console.log(apart);

   // if (isLoading || error) return <div>Chargement en cours</div>

   return (
      <div className="apartmentCard" key={id} >
         <div className="carousel">
            <Carousel  />
         </div>
         {apart && apart.map((apart) => {
            return (
               <div className="apartmentBody">
                  <div className="designation">
                     <div className="apartmentDesignation">
                        <h3 className="apartmentTitle" title={title}>
                           { title }
                        </h3> 
                        <h4 className="apartmentLocation" location={location}>
                           { location }
                        </h4>
                     </div>
                     <div className="apartmentHost">
                        <div className="hostName" name={name}>
                           {name }
                        </div>
                        <img className="hostPicture"src= { picture } alt={name + "sera votre hôte"} picture={picture}/>
                     </div>
                  </div>
                  <div className="apartmentAssets">
                     <ul className="apartmentTags">
                        {tags && tags.map((tag, index)=><li tag={tag + index} key={index}>{tag}</li>)}
                     </ul>
                     <div className="apartmentRate" >
                        <RatingStars rate={rating} />
                     </div>
                  </div> 
                  <div className="apartmentCaracteristics">
                     <Collapse title="Description" content={description} />
                     <Collapse title="Équipements" content={
                        equipments && equipments.map(
                           (equipments, index) => <ul key={equipments + index}><li key={index}>{equipments}</li></ul>)
                     }/>
                  </div>
               </div>
            )
         })}
      </div>
   );
};

export default ApartmentCard;