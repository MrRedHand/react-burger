import React, { useEffect} from 'react';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import {useDispatch, useSelector} from "react-redux";
import {getFullData} from "../../services/actions/getFullData";


function App() {

  const dispatch = useDispatch();

  const {fullDataRecieved} = useSelector(store => store.main);

  useEffect(() => {

    dispatch(getFullData())

  }, [])
    
  return (
    <>
      <AppHeader />
        {
            fullDataRecieved
            ? <Main/>
            : 'ЗАГРУЗКА'
        }

    </>
  );
}



export default App;
