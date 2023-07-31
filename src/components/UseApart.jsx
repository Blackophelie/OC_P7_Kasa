import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useApart() {
  const [apart, setApart] = useState(null);
  const location = useLocation();

  useEffect(() => {
   //  const abortController = new AbortController();
    fetch("datas/ApartmentsDatas.json")
      .then((res) => res.json())
      .then((aparts) => {
        const apart = aparts.find((apart) => apart.id === location.state.apartId);
        setApart(apart);
      })
      .catch(console.error);
   //  return () => {
   //    abortController.abort();
   //  };
  }, []);
  return apart;
}

export default useApart;