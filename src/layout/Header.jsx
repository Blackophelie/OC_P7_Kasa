// ------------- Importation --------------------- //
import React from "react";
import logo from "../assets/logo.svg";
import Nav from "../components/Nav";

import "../styles/Header.css";

// --------- Création du Header -------------------- //
function Header() {
   return (
      <header>
         <div>
            {/* import du  logo */}
               <img src={logo} alt="logo kasa" className="navLogo" />
         </div>
         {/* import de la navigation du header */}
         <nav className="navBar">
            <Nav />
         </nav>
      </header>   
   );
};

// -------- Export du Header --------- //
export default Header;