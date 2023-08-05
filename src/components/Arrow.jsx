/************* Composant Flèche *************/

// ----- Importations ----- //
import React, { useState } from "react";
import "../styles/components/Arrow.css";
import Arrow from "../assets/arrow_down.png";

// ----- Création de la flèche ----- //
function ScrollingArrow() { 
   const [open, setOpen] = useState(false);
   const toggle = () => { setOpen(!open)};
   
   return (
      <button className="scrollingArrow" onClick={toggle}>
         <img className={open ? "arrowUp" : "arrowDown"} src={ Arrow } alt="Flèche de déroulement" />
      </button>
   )
};

// ----- Exposrt du composant Flèche de déroulement ----- //
export default ScrollingArrow;

