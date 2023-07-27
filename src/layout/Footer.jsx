/************* Élément Footer *************/

// ----- Importations ----- //
import React from "react";
import Logo from "../assets/footerLogo.png";
import { Link } from "react-router-dom";

import "../styles/layout/Footer.css";

// ----- Création du footer ----- //
function Footer() {
   return (
      <footer>
         <div>
            {/* Insertion du lien vers la page d'accueil */}
            <Link to="/Home">
               {/* Insertion du Logo du footer */}
               <img src={ Logo } alt="logo kasa" className="footerLogo" />
            </Link>
         </div>
         <div className="copyright">
            @ 2020 Kasa. All rights reserved
         </div>
      </footer>
   )
};

// ----- Export du Footer ----- //
export default Footer;