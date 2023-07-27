/************* Composant Collapse *************/

// ----- Importations ----- //
import React, {useState} from "react";
import "../styles/Collapse.css";
import ScrollingArrow from "../components/Arrow";

// ----- Création la flèche de déroulement ----- //
function Collapse({ title, content }) { 
   const [open, setOpen] = useState(false);
   const toggle = () => { setOpen(!open)};

   return (
      <div className="collapse">
         <div className="collapseBtn" onClick={toggle}>
            <p className="collapseBtnTxt">{title}</p>
            <ScrollingArrow 
               className={open ?"arrowUp" : "arrowDown"} 
               alt={open ? "Flèche vers le haut" : "Flèche vers le bas"} />
         </div>
         <div className='"collapseTxtContainer" + {open ? "visibleTxtContainer" : "hiddenTxtContainer"}'>
            <ul className={open ? "visibleCollapseTxtContainer" : "hiddenCollapseTxtContainer"}>
               <li className="collapseTxtList">
                  <span className="collapseTxtContent">
                     <p>{content}</p>
                  </span>
               </li>
            </ul>
         </div>
      </div>
   )
};

export default Collapse;

