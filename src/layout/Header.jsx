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
         {/* <div> */}
            {/* import du composant logo */}
            <Link to="/Home">
               <img src={ Logo } alt="logo kasa" className="navLogo" />
            </Link>
         {/* </div> */}
         {/* import du composant navigation du header */}
         {/* <nav > */}
            <Nav className="navBar" />
         {/* </nav> */}
      </header>   
   );
};

// ----- Export du Header ----- //
export default Header;