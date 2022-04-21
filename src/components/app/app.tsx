import React, { useEffect } from 'react';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';

function App() {

  const [dataParams, setDataState] = React.useState({
    url: 'https://norma.nomoreparties.space/api/ingredients',
    data : '',
    dataReady : false,
    gotErrors : false
    })

    useEffect(() => {

      const getData = async () => {
        try{
          let response = await fetch(dataParams.url);
          let data = await response.json();
          console.log(data.data)
          setDataState({
              ...dataParams,
              dataReady : true,
              data : data.data
          })
        }catch(err){
          setDataState({
            ...dataParams,
            dataReady : false,
            gotErrors : true
          })
          console.error(err);
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
