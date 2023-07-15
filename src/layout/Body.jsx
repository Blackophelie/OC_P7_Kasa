import React from "react";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
// import App from "../components/App";

// import { Routes, Route } from "react-router-dom";

// const appRoute = Routes([
//    {
//       path:"/",
//       element: <App />
//    }
// ]);

function Body() {
   return (
   <div>
      <Banner />
      <Gallery />
   </div>)
}

export default Body