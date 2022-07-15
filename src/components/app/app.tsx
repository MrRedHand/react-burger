import React, {useEffect} from 'react';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import {useDispatch, useSelector} from '../../hooks/redux-hooks';
import {getFullData, reloginCheck} from "../../services/to-server-requests";
import LoginPage from "../../pages/login";
import RegisterPage from "../../pages/register";
import ForgotPage from "../../pages/forgot";
import ResetPage from "../../pages/reset";
import ProfilePage from "../../pages/profile/profile";
import {ProtectedRoute} from "../protected-route/protected-route";
import WrongPage from "../../pages/404";
import {Route, Switch, useHistory, useLocation} from "react-router-dom";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import * as H from 'history';
import {OrderFeedPage} from "../../pages/feed/feed";
import {MainLayout} from "../main-layout/main-layout";
import ProfileOrdersPage from "../../pages/profile/orders/orders";
import {OrderFeedDetails} from "../order-feed-details/order-feed-details";
import {clearConstructor} from "../../services/actions/actions-creators";


function App() {

  const location = useLocation<{background: H.Location<unknown>}>();

  const history = useHistory()

  const dispatch = useDispatch();

  const background = location.state && location.state.background

  const {fullDataRecieved} = useSelector(store => store.main);

  const {needToCheckUser, isAuthenticated} = useSelector(store => store.user);

  useEffect(() => {

    !fullDataRecieved && dispatch(getFullData())

    !isAuthenticated && reloginCheck()


  }, [isAuthenticated])



  const onCloseOrderDetailsModal = () => {
    dispatch(clearConstructor())
    history.push('/');
  }

  const onCloseIngredientModal = () => {
    setTimeout(() => {history.replace('/')}, 50)
  }

  const onCloseFeedModal = () => {
    history.push('/feed');
  }

  const onCloseFeedProfileModal = () => {
    history.push('/profile/orders/');
  }


  return (
    <>
        <AppHeader />
        <MainLayout>
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
                          <ProtectedRoute onlyAuth={true} path="/profile/orders" exact>
                            <ProfileOrdersPage/>
                          </ProtectedRoute>
                          {/*<ProtectedRoute onlyAuth={true} path="/profile/orders/:id" exact={true}>*/}
                          {/*  <OrderDetailsPage/>*/}
                          {/*</ProtectedRoute>*/}
                            <ProtectedRoute path="/ingredients/:id" exact={true}>
                                <IngredientDetails/>
                            </ProtectedRoute>
                            <ProtectedRoute path="/feed" exact={true}>
                              <OrderFeedPage/>
                            </ProtectedRoute>
                          <ProtectedRoute path="/feed/:id" exact={true}>
                            <OrderFeedDetails/>
                          </ProtectedRoute>
                            <ProtectedRoute path="*">
                                <WrongPage/>
                            </ProtectedRoute>
                        </Switch>
                        <Route path="/order-details" children={
                            <Modal
                                activity={true}
                                children={<OrderDetails/>}
                                onCloseEvent={onCloseOrderDetailsModal}
                            />
                        }/>
                        {background && (
                            <>
                              <Route path="/ingredients/:id" children={
                                <Modal
                                    activity={true}
                                    heading={'Детали ингредиента'}
                                    children={<IngredientDetails/>}
                                    onCloseEvent={onCloseIngredientModal}
                                />

                              }/>
                              <Route path="/feed/:id" children={
                                <Modal
                                    activity={true}
                                    children={<OrderFeedDetails/>}
                                    onCloseEvent={onCloseFeedModal}
                                />
                              }/>

                            </>
                        )}
                    </>
                )
        }
        </MainLayout>

    </>
  );
}



export default App;
