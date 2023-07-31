/************* Page About ("A Propos") *************/

// ----- Importations ----- //
import React from "react";
import "../styles/pages/About.css";
import "../styles/components/Collapse.css";
import Collapse from "../components/Collapse";
import AboutImg from "../assets/photoAbout.png";
import AboutLists from "../data/AboutDatas.json"


// ----- Création de la page à propos ----- //
function About() {   

   
   return (
      <div className="aboutBody">
         <div className="aboutBanner">
            <img className="aboutBannerImg" src={AboutImg} alt="Bannière à propos" />
         </div>
         <div className="aboutParts">
            {AboutLists.map(about=>{
                  const {title, content} = about;
                  return (
                     <div className="aboutPart" title={title}> 
                        <Collapse title={title} content={content} key={content} />                     
                     </div>
                  )
               })};
         </div>
      </div>
   );
};

// ----- Export de la page à propos ----- //
export default About;