import React from 'react';
// import Collapse from "../components/Collapse";
import "../styles/pages/Apartment.css";

function Designation(props) {

   
   return (
   <div className="designation">
      <div className="apartmentDesignation">
         <h3 className="apartmentTitle" title={props.title}>
            { props.title }
         </h3> 
         <h4 className="apartmentLocation" location={props.location}>
            { props.location }
         </h4>
      </div>
      <div className="apartmentHost">
         <div className="hostName" name={props.name}>
            { props.name }
         </div>
         <img className="hostPicture"
         src= { props.picture } alt="Votre hôte" picture={props.picture}/>
      </div>
   </div>)
}

export default Designation;