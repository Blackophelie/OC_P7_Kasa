// ----- Importations ----- //
import React from "react";
import Logo from "../assets/footerLogo.png";
import { Link } from "react-router-dom";

import "../styles/Footer.scss";

// ----- Création du footer ----- //
function Footer() {
   return (
      <footer>
         <div>
            <Link to="/Home">
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