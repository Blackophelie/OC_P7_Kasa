// ----- Importations ----- //
import React from "react";

import Banner from "../components/Banner";
import Gallery from "../components/Gallery";

import "../styles/Home.scss";

// ----- Création de la page d'accueil ----- //
function Home() {
   return (
      <div className='homePage'>
         <Banner />
         <Gallery />
      </div>
   )
}

// ----- Export de la page d'accueil ----- //
export default Home;