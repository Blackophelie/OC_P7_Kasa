/************* Hook useFetch *************/

// ----- Importations ----- //
import { useState, useEffect } from "react";

// ----- Création des cards appartement ----- //
function useFetch(url) {
   const [apart, setApart] = useState();

   useEffect(() => {
      fetch(url)
         .then ((res) => res.json())
         .then ((apart) => setApart(apart))
         .catch((error) => error)
   }, [url]);

return apart;
};
export default useFetch;