import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Error from "../pages/Error";
import Apartment from "../pages/ApartmentCard";

function PageRoute() {
   return (
      <Routes>
         <Route path="/" element={ <Home /> } />
         <Route path="/" element={ <About /> } />
         <Route path="/" element={ <Error /> } />
         <Route path="ApartmentCard/:ApartmentId" element={ <Apartment /> } />
      </Routes>
   )
};

export default PageRoute;