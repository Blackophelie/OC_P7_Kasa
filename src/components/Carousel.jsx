/************* Composant Carousel de la page Apartment *************/

// ----- Importations ----- //
//React et hook useState
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Error from '../pages/Error';
import RightArrow from "../assets/arrow_right.svg";
import "../styles/components/Carousel.css"
import "../styles/pages/Apartment.css"

// ----- Création du composant Carousel pour la page Apartment ----- //
function Carousel() { 
   const {id} = useParams();
   // const {pictures} = Apartment.find((apart) => apart.id === id);
   const { isLoading } = useState(true);
   const [current, setCurrent] = useState([0]);
   // const {pictures} = current.pictures;
   
   useEffect(() => {
      const getPicture = async () => {
         const res = await fetch("../datas/ApartmentsDatas.json")
         .then(res => res.json());
         
         const data = res.find(apart => apart.id === id);
         
         if(!data) {
            <Error />
         }
         setCurrent(data);
      }
      getPicture();
   }, [id]);

   if (isLoading) return <h3>Chargement...</h3>
   
   const RightSliding = () => {
      setCurrent(current === current.length -1 ? 0 : current +1);
   }
   
   const LeftSliding = () => {
      setCurrent(current === 0 ? current.length -1 : current -1);
   }
   console.log(current);

   return (
      <div className="carouselBody" >
         <div className="arrows">            
            <div className="goToLeft">
               {(current.length > 1) &&(
                  <img className="leftArrow" src={RightArrow} alt='flèche vers la gauche' onClick={LeftSliding}/>
               )}
            </div>
            <div className="goToRight">
               {(current.length > 1) &&(
                  <img className="rightArrow" src={RightArrow} alt='flèche vers la droite' onClick={RightSliding}/>
               )}
            </div>
         </div>
         
         {current.pictures && current.pictures.map((picture, index) =>{
            return(
               <div className="carouselSlides" >
                  {index === current.index &&(
                     <img className='carouselImg' src={picture} alt="" pictures={current} />
                     )}
                  {index === current &&(
                     <span className='carouselImgNumber'alt={(current +1)/(current.length)} length={current.length} >
                        {current +1}/{current.length}
                     </span>
                  )}
               </div>
            );
         })}
      </div>
   );
};

export default Carousel;