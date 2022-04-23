import React, { useEffect } from 'react';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';

function App() {

  const [dataParams, setDataState] = React.useState({
    url: 'https://norma.nomoreparties.space/api/ingredients',
    data : [],
    dataReady : false,
    gotErrors : false
    })

    useEffect(() => {

      const getData = ()  => {
        fetch(dataParams.url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            return Promise.reject(`Ошибка ${response.status}`);
          }
        })
        .then((data) => {
          console.log(data.data)
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
