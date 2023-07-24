/************* Composant Carousel de la page Apartment *************/

// ----- Importations ----- //
//React et hook useState
import React, { useState } from 'react';

import { useParams } from 'react-router-dom';

import Apartment from '../datas/ApartmentsDatas.json';
import arrowLeft from '../assets/arrow_back.png';
import arrowRight from '../assets/arrow_forward.png';
import "../styles/Carousel.scss"

// ----- Cr&ation du composant Carousel pour la page Apartment ----- //
function Carousel() { 
   const {id} = useParams();
   const {pictures} = Apartment.find((apart) => apart.id === id);
   const [current, setCurrent] = useState(0);

   const RightSliding = () =>{
      setCurrent(current === pictures.length -1 ? 0 : current +1);
   }

   const LeftSliding = () =>{
      setCurrent(current === 0 ? pictures.length -1 : current -1);
   }

   return (
      <div className='carousel'>
         {pictures.length > 1 &&(
            <img className='arrowLeft' src={arrowLeft} alt='flèche vers la gauche' onClick={LeftSliding}/>
         )}

         {pictures.length > 1 &&(
            <img className='arrowRight' src={arrowRight} alt='flèche vers la droite' onClick={RightSliding}/>
         )}

         {pictures.map((picture, index) =>{
            return(
               <div key={index}>
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