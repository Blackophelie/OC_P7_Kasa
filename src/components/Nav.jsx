// ------------ Importations ------------ //
import React from "react";
import '../styles/Header.css'

import { Link } from 'react-router-dom'

// ----- Création de la navigation du Header ----- //
function Nav() {
    return (
        <nav>
            <div className='navBar'>
            <Link to="/Home">Accueil</Link>
            <Link to="/About">À propos</Link>
            </div>
        </nav>
    )
}

// ----- Rxport de la navigation ----- //
export default Nav