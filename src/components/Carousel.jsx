/************* Composant Carousel de la page Apartment *************/

// ----- Importations ----- //
//React et hook useState
import React, { useState } from 'react';

import { useParams } from 'react-router-dom';

import Apartment from '../datas/ApartmentsDatas.json';
import RightArrow from "../assets/arrow_right.svg";
import "../styles/Carousel.css"

// ----- Cr&ation du composant Carousel pour la page Apartment ----- //
function Carousel() { 
   const {id} = useParams();
   const {pictures} = Apartment.find((apart) => apart.id === id);
   const [current, setCurrent] = useState(0);

   const RightSliding = () => {
      setCurrent(current === pictures.length -1 ? 0 : current +1);
   }

   const LeftSliding = () => {
      setCurrent(current === 0 ? pictures.length -1 : current -1);
   }

   return (
      <div className="carouselBody">
         <div className="arrows">            
            <div className="goToLeft">
               {pictures.length > 1 &&(
                  <img className="leftArrow" src={RightArrow} alt='flèche vers la gauche' onClick={LeftSliding}/>
               )}
            </div>
            <div className="goToRight">
               {pictures.length > 1 &&(
                  <img className="rightArrow" src={RightArrow} alt='flèche vers la droite' onClick={RightSliding}/>
               )}
            </div>
         </div>
         {pictures.map((picture, index) =>{
            return(
               <div className="carouselSlides" key={index}>
                  {index === current &&(
                     <img className='carouselImg' src={picture} alt={pictures.description}/>
                  )}
                  {index === current &&(
                     <span className='carouselImgNumber'>
                        {current +1}/{pictures.length}
                     </span>
                  )}
               </div>
            );
         })}
      </div>
   );
};

export default Carousel;