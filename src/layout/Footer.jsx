// ----- Importations ----- //
import React from "react";
import logo from "../assets/logo.svg";

import "../styles/Footer.css";

// ----- Création du footer ----- //
function Footer() {
   return (
      <div className="footer">
         <div>
            <img src={logo} alt="logo kasa" className="footerLogo" />
         </div>
         <div className="copyright">
            <logo />
            "@ 2020 Kasa. All rights reserved"
         </div>
      </div>
   )
};

// ----- Export du Footer ----- //
export default Footer;