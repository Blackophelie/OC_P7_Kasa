import React from 'react';
import Collapse from "../components/Collapse";
import { useParams } from "react-router-dom";
import "../styles/pages/Apartment.css";


function Caracteristics () {
   const params = useParams();
   const apart = params.id;
   console.log(apart);
   return (
      <div className="apartmentCaracteristics">
         <Collapse title="Description" content={apart.description} description={apart.description} />
         <Collapse 
            title="Équipements"
            content={
               apart.equipments &&
               apart.equipments.map((equipments, index) => {
                  return (
                     <ul key={equipments + index}>
                        <li equipments={apart.equipments}>{apart.equipments} </li>
                     </ul>
                  )
               })
            } 
         />
      </div>
   )
}

export default Caracteristics;