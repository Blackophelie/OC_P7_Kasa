// ----- Importations ----- //
import React from "react";
import "../styles/Carousel.scss";
import Datas from "../data/data.json";
// import Card from "./Card";
import { useParams } from "react-router-dom";


function Carousel() {
   const { ApartmentId } = useParams();
   const apart = Datas.find((apart) => apart.id === ApartmentId);
   const { pictures } = apart;

   return (
      
      <div className="carouselContainer">
         
         { Datas(apart =>{
            <img src={pictures} alt="accomodation" />
         })}
      </div>
   )
}

export default Carousel;