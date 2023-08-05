/************* Composant Collapse *************/

// ----- Importations ----- //
import React, {useState} from "react";

import ScrollingArrow from "../components/Arrow";

import "../styles/components/Collapse.css";

// ----- Création du composant Collapse ----- //
function Collapse({ title, content }) { 
   const [open, setOpen] = useState(false);
   const toggle = () => { setOpen(!open)};

   return (
      <div className="collapse">
         <div className="collapseBtn" onClick={toggle}>
            <p className="collapseBtnTxt">{title}</p>
            <ScrollingArrow className={open ?"arrowUp" : "arrowDown"} alt={open ? "Fermer le volet" : "Ouvrir le volet"} />
         </div>
         <div className='"collapseTxtContainer" + {open ? "visibleTxtContainer" : "hiddenTxtContainer"}'>
            <ul className={open ? "visibleCollapseTxtContainer" : "hiddenCollapseTxtContainer"} contain={content}>
               <li className="collapseTxtList">
                  <span className="collapseTxtContent">
                     <div >
                        {content}
                     </div>
                  </span>
               </li>
            </ul>
         </div>
      </div>
   )
};

// ----- export du composant Collapse ----- //
export default Collapse;

