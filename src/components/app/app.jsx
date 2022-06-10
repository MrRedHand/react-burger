import React, { useEffect} from 'react';
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
import {ProtectedRoute} from "../protected-route/protected-route";
import {checkUserToken} from "../../services/to-server-requests";
import WrongPage from "../../pages/404";
import {Route, Switch, useHistory, useLocation} from "react-router-dom";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";


function App() {

  const history = useHistory()

  const location = useLocation()

  const dispatch = useDispatch();

  const background = location.state && location.state.background

  const {fullDataRecieved} = useSelector(store => store.main);

  useEffect(() => {

    dispatch(getFullData())

    checkUserToken()

  }, [])

    
  return (
    <>
          <AppHeader />
          <Switch location={background || location}>
          <ProtectedRoute path="/" exact>
              {
                  fullDataRecieved
                      ? <Main/>
                      : 'ЗАГРУЗКА'
              }
          </ProtectedRoute>
            <ProtectedRoute path="/login" exact>
                <LoginPage />
            </ProtectedRoute>
          <ProtectedRoute path="/register" exact={true}>
            <RegisterPage/>
          </ProtectedRoute>
          <ProtectedRoute onlyUnAuth={true} path="/forgot-password" exact={true}>
            <ForgotPage/>
          </ProtectedRoute>
          <ProtectedRoute onlyUnAuth={true} path="/reset-password" exact={true}>
            <ResetPage/>
          </ProtectedRoute>
          <ProtectedRoute onlyUnAuth={true} path="/profile" exact={true}>
            <ProfilePage/>
          </ProtectedRoute>
          <ProtectedRoute path="/ingredients/:id" exact={true}>
              <IngredientDetails/>
          </ProtectedRoute>
          <ProtectedRoute path="*">
            <WrongPage/>
          </ProtectedRoute>
          </Switch>
            <Route path="/order-details" children={
                <Modal
                    activity={true}
                    children={<OrderDetails/>}
                />
            }/>
            {background && (
              <Route path="/ingredients/:id" children={
                  <Modal
                      activity={true}
                      heading={'Детали ингредиента'}
                      children={<IngredientDetails/>}
                  />

              }/>
          )}

    </>
  );
}



export default App;
