import React, { useEffect} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import {useDispatch, useSelector} from "react-redux";
import {getFullData} from "../../services/actions/getFullData";
import LoginPage from "../../pages/login";
import RegisterPage from "../../pages/register";
import ForgotPage from "../../pages/forgot";
import ResetPage from "../../pages/reset";
import ProfilePage from "../../pages/profile";
import IngredientPage from "../../pages/ingredient";


function App() {

  const dispatch = useDispatch();

  const {fullDataRecieved} = useSelector(store => store.main);

  useEffect(() => {

    dispatch(getFullData())

  }, [])
    
  return (
    <>
        <Router>
          <AppHeader />
            <Route path="/" exact={true}>
              {
                fullDataRecieved
                    ? <Main/>
                    : 'ЗАГРУЗКА'
              }
            </Route>
            <Route path="/login" exact={true}>
                <LoginPage />
            </Route>
          <Route path="/register" exact={true}>
            <RegisterPage/>
          </Route>
          <Route path="/forgot-password" exact={true}>
            <ForgotPage/>
          </Route>
          <Route path="/reset-password" exact={true}>
            <ResetPage/>
          </Route>
          <Route path="/profile">
            <ProfilePage/>
          </Route>
          <Route path="/ingredients/:id">
            <IngredientPage/>
          </Route>
        </Router>
    </>
  );
}



export default App;
