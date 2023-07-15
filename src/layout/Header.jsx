import React from "react";
import "./Header.css";
// import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Header() {
   return (
      <header className="headerSection">
         <div>
            {/* <Link to={"/"} /> */}
               <img src={logo} alt="logo kasa" className="navLogo" />
         </div>
         <nav className="navBar">
                  <div>Accueil</div>
                  <div>A propos</div>
         </nav>
      </header>   
   );
};

export default Header;