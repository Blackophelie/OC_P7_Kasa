// ----- Importations ----- //
import "../styles/Error.scss";

import { Link } from "react-router-dom";

// ----- Création de la page Error 404 ----- //
function Error() {
   return (
      <div className="errorBody">
         <h1>404</h1>
         <div className="errorMessage">
            <p>Oups ! la page que vous demandez n'existe pas.</p>
         </div>
         <Link to={ "/" }>
            <span className="HomeLInk">Retourner sur la page d'accueil</span>
         </Link>
      </div>
   );
};

// ----- Export de la page Error 404 ----- //
export default Error;