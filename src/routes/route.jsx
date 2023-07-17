// ----- Importations ----- //
import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Error from "../pages/Error";
import Apartment from "../pages/ApartmentCard";

// ----- Création des différentes routes ----- //
ReactDOM.render(
   <React.StrictMode>
      <Routes>
         <Route path="/" element={ <Home /> } />
         <Route path="/About" element={ <About /> } />
         <Route path="/Error" element={ <Error /> } />
         <Route path="ApartmentCard/:ApartmentId" element={ <Apartment /> } />
      </Routes>
   </React.StrictMode>,
   document.getElementById('root')
)
