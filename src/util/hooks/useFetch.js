import { useEffect, useState } from "react";

// use fetch va primi ca param un url si va cere date de la api

export function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((json) => {
        setData(json.meals)
        // console.log(data)

    });
  }, [url]); // pentru ca url este un prop .. il punem in array-ul de dependinte pentru a nu avea un request la infinit
  
  return data;
}

export function useFetchCategory(url) {

  const [dataCateg, setDataCateg] = useState(null);
  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((responseData) => {
      setDataCateg(responseData)
      
    });
  }, []); 

  return dataCateg;
}
