/************* Composant Carousel de la page Apartment *************/

// ----- Importations ----- //
//React et hook useState
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Error from '../pages/Error';
import RightArrow from "../assets/arrow_right.png";
import "../styles/components/Carousel.css"
import "../styles/pages/Apartment.css"

// ----- Création du composant Carousel pour la page Apartment ----- //
function Carousel() { 
   // const { isLoading } = useState(true);
   const [apart, setApart] = useState([0]);
   const [currentImgIndex, setCurrentImgIndex] = useState(0);
   const pictures = apart.pictures || [];
   const [index, picture] = pictures;

   
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
   
   
   const RightSliding = () => {
      // setCurrentImgIndex(currentImgIndex + 1)
      // if(currentImgIndex === pictures.length - 1)
      // setCurrentImgIndex()
      setCurrentImgIndex(currentImgIndex === pictures.length -1 ? 0 : currentImgIndex +1);
   }
   
   const LeftSliding = () => {

      const newCurrentIndex = currentImgIndex - 1;
      if(newCurrentIndex < 0) {
      setCurrentImgIndex(pictures.length - 1);
      return;
      }
      setCurrentImgIndex(currentImgIndex - 1)
      // setApart(currentImgIndex === 0 ? pictures.length -1 : currentImgIndex -1);
   }
   
   // if (isLoading) return <h3>Chargement...</h3>
   
   const addClassName = (i) =>{
         if (i === currentImgIndex) return "view";
         return "hidden";
      };
      
      console.log(pictures);
      console.log(currentImgIndex);
      console.log(index);
      console.log(addClassName(currentImgIndex));
      
      return (
         <div className="carouselBody">
         <div className="arrows">            
            <div className="goToLeft" >
               {/* flèches s'il y a plus d'une photo */}
               {(pictures.length > 1) &&(
                  <img className="leftArrow" src={RightArrow} alt="précédente" onClick={LeftSliding} left="previous"/>
                  )}
            </div>
            <div className="goToRight">
               {(pictures.length > 1) &&(
                  <img className="rightArrow" src={ RightArrow } alt="suivante" onClick={RightSliding} right="next" />
                  )}
            </div>
         </div>
         <div className="carouselSlides">

            {currentImgIndex >= 0 && pictures.map((picture, index) => {
               
               return(
                  <div className="carouselImg">
                     <>
                        <img className={addClassName(index)} src={picture} alt="aménagements" />
                     </>
                    
                        <div className="carouselImgNumber" alt={"photo numéro " + (index + 1)} length={ pictures.length } >
                           {(currentImgIndex + 1)} / { pictures.length }
                        </div>
                     
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default Carousel;