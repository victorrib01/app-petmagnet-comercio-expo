import { useEffect, useState } from 'react';
import Api from './Api';

function ApiGET({endPoint}) {
  const [dados, setDados] = useState([]);
  
  useEffect(() => {
    //console.log('====================== USE EFFECT ApiGET ==========================')
    //console.log(endPoint);

    getFromAPI(endPoint);
  }, [])

  function getFromAPI(endPoint){
    //console.log(endPoint);
    
    Api.get(endPoint)
      .then(function(response){
        //console.log(response.data);
        setDados(response.data);
      })
      .catch(function(error){
        console.log(error);
      });
  }

  return (dados);
}

export { ApiGET };