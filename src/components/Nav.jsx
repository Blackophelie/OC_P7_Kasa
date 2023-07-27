/************* Composant Nav de la Banner *************/

// ------------ Importations ------------ //
import React from "react";
import { Link } from 'react-router-dom'
import '../styles/components/Nav.css'

// ----- Création de la navigation du Header ----- //
function Nav() {
    return (
        <nav>
            <div className='navBarLinks'>
                <Link to="/Home">Accueil</Link>
                <Link to="/About">A Propos</Link>
            </div>
        </nav>
    )
}

// ----- Export de la navigation ----- //
export default Nav;