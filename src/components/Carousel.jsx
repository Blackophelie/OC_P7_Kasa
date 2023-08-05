/************* Composant Carousel de la page Apartment *************/

// ----- Importations ----- //
// React et hooks
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Error from '../pages/Error';

import RightArrow from "../assets/arrow_right.png";

import "../styles/components/Carousel.css"

// ----- Création du composant Carousel pour la page Apartment ----- //
function Carousel() { 
   const [apart, setApart] = useState([0]);
   const [currentImgIndex, setCurrentImgIndex] = useState(0);
   const pictures = apart.pictures || [];
   
   // Récupération de la promise correspondant à l'id
   const {id} = useParams();
   useEffect(() => {
      const getPictureId = async () => {
         const res = await fetch("../datas/ApartmentsDatas.json")
         .then(res => res.json());
         const data = res.find(apart => apart.id === id);
         
         if(!data) {
            <Error />
         }
         setApart(data);
      }
      getPictureId();
   }, [id]);   
   
   // Fonction de passage à la photo suivante
   const RightSliding = () => {
      setCurrentImgIndex(currentImgIndex === pictures.length -1 ? 0 : currentImgIndex +1);
   }
   
   // Fonction de passage à la photo précédente
   const LeftSliding = () => {
      const newCurrentIndex = currentImgIndex - 1;
      if(newCurrentIndex < 0) {
         setCurrentImgIndex(pictures.length - 1);
         return;
      }
      setCurrentImgIndex(currentImgIndex - 1)
   }
   
   // Fonction d'ajout de nom de classe
   const addClassName = (ind) => {
         if (ind === currentImgIndex) return "view";
         return "hidden";
   };
            
   return (
      <div className="carouselBody" pictures={pictures}>
         {/* flèches s'il y a plus d'une photo */}
         <div className="arrows">            
            <div className="goToLeft">
               {(pictures.length > 1) &&(
                  <img className="leftArrow" src={RightArrow} alt="précédente" onClick={LeftSliding} />
               )}
            </div>
            <div className="goToRight">
               {(pictures.length > 1) &&(
                  <img className="rightArrow" src={ RightArrow } alt="suivante" onClick={RightSliding} />
               )}
            </div>
         </div>
         <div className="carouselSlides">
            {currentImgIndex >= 0 && pictures.map((picture, index) => {
               return(
                  <div className="carouselImg" key={index}>
                     <img className={addClassName(index)} src={picture} alt="aménagements"/>
                     <div className="carouselImgNumber" alt={"photo numéro " + (index + 1)}>
                        {(currentImgIndex + 1)} / { pictures.length }
                     </div>                     
                  </div>
               );
            })};
         </div>
      </div>
   );
};

// ----- Export du composant Carousel ----- //
export default Carousel;