/************* Page Error ("404") *************/

// ----- Importations ----- //
import React from "react";
import "../styles/pages/Error.css";

import { Link } from "react-router-dom";

// ----- Création de la page Error 404 ----- //
function Error() {
   return (
      <div className="errorBody">
         <h1>404</h1>
         <h2>Oups ! la page <br />que vous demandez n'existe pas.</h2>         
         <Link to={ "/" }>
            <span className="homeLink">Retourner sur la page d'accueil</span>
         </Link>
      </div>
   );
};

// ----- Export de la page Error 404 ----- //
export default Error;