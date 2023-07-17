// ----- Importations ----- //
import "../styles/About.scss";

import { Link } from "react-router-dom";

// ----- Création de la page à propos ----- //
function About() {
   return (
      <div className="aboutBody">
         <h1>À PROPOS</h1>
         <Link to={ "/About" }>
            <span className="HomeLInk">Retourner sur la page d'accueil</span>
         </Link>
      </div>
   );
};

// ----- Export de la page à propos ----- //
export default About;