// ----- Importations ----- //
import React from "react";
import Logo from "../assets/logo.svg";

import "../styles/Footer.scss";

// ----- Création du footer ----- //
function Footer() {
   return (
      <div className="footer">
         <div>
            <img src={ Logo } alt="logo kasa" className="footerLogo" />
         </div>
         <div className="copyright">
            @ 2020 Kasa. All rights reserved
         </div>
      </div>
   )
};

// ----- Export du Footer ----- //
export default Footer;