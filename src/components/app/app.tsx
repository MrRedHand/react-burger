import React, {useCallback, useEffect} from 'react';
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
import {Route, Switch, SwitchProps, useHistory, useLocation} from "react-router-dom";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {reloginCheck} from "../../services/relogin-check";
import * as H from 'history';


function App() {

  const location = useLocation<{background: H.Location<unknown>}>();

  const history = useHistory()

  const dispatch = useDispatch<any>();

  const background = location.state && location.state.background

  const {fullDataRecieved} = useSelector<any>(store => store.main) as any;

  const {needToCheckUser, isAuthenticated} = useSelector<any>(store => store.user) as any;

  useEffect(() => {

    !fullDataRecieved && dispatch(getFullData())

    !isAuthenticated && reloginCheck()

  }, [])


    const returnToMain = () => {
      setTimeout(() => {history.replace('/')}, 50)
    }
  return (
    <>
        <AppHeader />
        {
          needToCheckUser
                ? 'Проверка логина'
                : (
                    <>
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
                            <ProtectedRoute path="/register" exact>
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
                                    onCloseEvent={returnToMain}
                                />

                            }/>
                        )}
                    </>
                )
        }


    </>
  );
}



export default App;
