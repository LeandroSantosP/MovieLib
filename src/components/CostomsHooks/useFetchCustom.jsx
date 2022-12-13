import axios from 'axios';
import React, { useState } from 'react'

const useFetcCustom = () => {
   const [ data, setData ] = useState(null);
   const [ error, setError ] = useState(null);
   const [ loading, setLoading ] = useState(false);

   const request = React.useCallback(async (url, options) => {
      let response;
      try {
         setError(null);
         setLoading(true);
         response = await axios.get(url, options);
         if(!response.ok) throw new Error("algo deu errado");
      } catch (err) {
         json = null;
         console.log("ok")
         setError("algo deu errado")
      } finally {
         setTimeout(() => {
         setLoading(false);
         }, 400);
         
         setData(response);
         return { response };
      }
   }, []);

   return { data, request, error, loading };
}

export default useFetcCustom