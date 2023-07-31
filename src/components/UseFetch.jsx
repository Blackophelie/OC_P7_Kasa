/************* Hook useFetch *************/

// ----- Importations ----- //
import { useState, useEffect } from "react";

// ----- Création des cards appartement ----- //

function useFetch(url) {

   const [data, setData] = useState({})
   
   const [isLoading, setLoading] = useState(true)
   
   const [error, setError] = useState(false)
   
    
   
   useEffect(() => {
   
   if (!url) return
   
   setLoading(true)
   
   async function fetchData() {
   
   try {
   
   const response = await fetch(url)
   
   const data = await response.json()
   
   setData(data)
   
   } catch (err) {
   
   setError(true)
   
   } finally {
   
   setLoading(false)
   
   }
   
   }
   
   fetchData()
   
   }, [url])
   
   return { isLoading, data, error }
   
   }
   

// function useFetch(url) {
//    const [apart, setApart] = useState();
//    // console.log(apart);
//    useEffect(() => {
//       fetch("http://localhost:3000/datas/ApartmentsDatas.json")
//          .then ((res) => res.json())
//          .then ((apart) => setApart(apart))
//          .catch((error) => error)
//    }, []);

// return apart;
// };
export default useFetch;

// // ----- Création de la fiche appartement ----- //
// function useFetchApart() {
//    const [apart, setApart] = useState([]);
   
//    useEffect(() => {
//       fetch("localhost:3000/datas/ApartmentsDatas.json")
//          .then ((res) => res.json())
//          .then (apart => apart.getOne)
//          .catch((error) => error)
//    }, []);
      
//    return apart;
// };

// export default useFetchApart;

