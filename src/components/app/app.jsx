import React, { useEffect, useContext } from 'react';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import { apiUrl } from '../../services/apiUrl';
import { ProductsContext } from "../../services/productsContext";


function App() {


  const [dataParams, setDataState] = React.useState({
    url: apiUrl,
    data : [],
    dataReady : false,
    gotErrors : false
    })

    useEffect(() => {

      const getData = ()  => {
        fetch(dataParams.url)
        .then(checkResponse)
        .then((data) => {
          console.log('got json', data.data)
          setDataState({
              ...dataParams,
              dataReady : true,
              data : data.data
          })
        })
        .catch((error) => {
          setDataState({
              ...dataParams,
              dataReady : false,
              gotErrors : true
            })
          console.log(error)
        });
      }

      function checkResponse(response) {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(`Ошибка ${response.status}`);
        }
      }

      getData();

    }, [])

    
  return (
    <>
      <AppHeader />

      {
        dataParams.dataReady ? <Main data={dataParams.data}/> : 'ЗАГРУЗКА'
      }
    </>
  );
}



export default App;
