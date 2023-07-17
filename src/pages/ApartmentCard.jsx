// ----- Importations ----- //
import "../styles/ApartmentCard.scss";

import { Link } from "react-router-dom";

// ----- Création de la fiche appartement ----- //
function ApartmentCard() {
   return (
      <div className="apartmentCard">
         <h1>Titre de la location</h1>
         <Link to={ "/" }>
            <span className="HomeLInk">Retourner sur la page d'accueil</span>
         </Link>
      </div>
   );
};

// ----- Export de la fiche appartement ----- //
export default ApartmentCard;