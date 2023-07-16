import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Error from "../pages/Error";
import Apartment from "../pages/ApartmentCard";

ReactDOM.render(
   <React.StrictMode>
      <Router>
         <Routes>
            <Route path="/" element={ <About /> } />
            <Route path="/" element={ <Error /> } />
            <Route path="/" element={ <Home /> } />
            <Route path="ApartmentCard/:ApartmentId" element={ <Apartment /> } />
         </Routes>
      </Router>
   </React.StrictMode>,
   document.getElementById('root')
)
