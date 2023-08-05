// ***** Composant Assets de la page Apartment ***** //

// ----- Importations ----- //
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Collapse from "../components/Collapse";
import Error from "../pages/Error";

import "../styles/pages/Apartment.css";


// ----- Création du composant Assets ----- //
function Assets() {
   const {id}  = useParams();
   const [apart, setApart] = useState({});
   
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
      <div className="apartmentCaracteristics">
         <Collapse title="Description" content={ apart.description }/>
         <Collapse title="Équipements" content={
            apart.equipments && apart.equipments.map(
               (equipments, index) =>
                  <ul>
                     <li equipments={index}>{ equipments }</li>
                  </ul>
            )
         }/>
      </div>            
   )
};

// ----- Export du composant Assets ----- //
export default Assets;