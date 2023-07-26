/************* Page About ("A Propos") *************/

// ----- Importations ----- //
import React from "react";
import "../styles/About.css";
import "../styles/Collapse.css";
import Collapse from "../components/Collapse";
import AboutImg from "../assets/photoAbout.png";
import AboutLists from "../datas/AboutDatas.json"


// ----- Création de la page à propos ----- //
function About() {   

   
   return (
      <div className="aboutBody">
         <div className="aboutBanner">
            <img className="aboutBannerImg" src={AboutImg} alt="Bannière à propos" />
         </div>
         {AboutLists.map(about=>{
               const {title, content} = about;
               return (
                  <div className="aboutPart">
                     <Collapse title={title} content={content} />                     
                  </div>
               )
            })};
      </div>
   );
};

// ----- Export de la page à propos ----- //
export default About;