import React, { useEffect, useContext } from 'react';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import { apiUrl } from '../../utils/apiUrl';
import checkResponse from '../../utils/checkResponse';
import { ProductsContext } from "../../services/productsContext";


function App() {


  const [dataParams, setDataState] = React.useState({
    data : [],
    dataReady : false,
    gotErrors : false
    })

    useEffect(() => {

      const getData = ()  => {
        fetch(apiUrl + 'ingredients/')
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
