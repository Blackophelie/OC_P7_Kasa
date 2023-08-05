/************* Élément Header *************/

// ----- Importations ----- //
import React from "react";
import Logo from "../assets/logo.svg";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

import "../styles/layout/Header.css";

// ----- Création du Header ----- //
function Header() {
   return (
      <header>
         {/* Import du composant logo */}
         <Link to="/Home">
            <img src={ Logo } alt="logo kasa" className="navLogo" />
         </Link>
         {/* Import du composant navigation du header */}
         <Nav className="navBar" />
      </header>   
   );
};

// ----- Export du Header ----- //
export default Header;