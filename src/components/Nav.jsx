// ------------ Importations ------------ //
import React from "react";
import { Link } from 'react-router-dom'
import '../styles/Header.scss'

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

// ----- Export de la navigation ----- //
export default Nav