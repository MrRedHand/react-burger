import React, { useEffect} from 'react';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import {useDispatch, useSelector} from "react-redux";
import {checkResponse, getFullData, getUser, updateUser} from "../../services/to-server-requests";
import LoginPage from "../../pages/login";
import RegisterPage from "../../pages/register";
import ForgotPage from "../../pages/forgot";
import ResetPage from "../../pages/reset";
import ProfilePage from "../../pages/profile";
import {ProtectedRoute} from "../protected-route/protected-route";
import WrongPage from "../../pages/404";
import {Route, Switch, useHistory, useLocation} from "react-router-dom";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {loginFailed, loginSuccess, reloginUser} from "../../services/actions/user-login";


function App() {

  const history = useHistory()

  const location = useLocation()

  const dispatch = useDispatch();

  const background = location.state && location.state.background

  const {fullDataRecieved} = useSelector(store => store.main);

  useEffect(() => {

    dispatch(getFullData())

      if (localStorage.getItem('accessToken')) {
          getUser()
              .then(res => {
                  if (res.success) {
                      console.log(res)
                      const objPayload = {
                          email : res.user.email,
                          name : res.user.name,
                      }
                      dispatch(reloginUser(objPayload))
                  }
              })
              .catch((error) => {
                  console.log('userReloginError ', error)
              });
      }

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
          <ProtectedRoute path="/forgot-password" exact>
            <ForgotPage/>
          </ProtectedRoute>
          <ProtectedRoute path="/reset-password" exact>
            <ResetPage/>
          </ProtectedRoute>
          <ProtectedRoute onlyAuth={true} path="/profile" exact>
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
