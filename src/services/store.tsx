import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from "./reducers";
import {socketMiddleware} from "./websocket/websocket";
import {wsStart} from "./actions/wsOrderActions";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const token = localStorage.getItem('accessToken')

const userOrders = `wss://norma.nomoreparties.space/orders?token=${token}`

const enhancer = composeEnhancers(
    applyMiddleware(
        thunk,
        socketMiddleware(wsStart('wss://norma.nomoreparties.space/orders/all'))))

export const store = createStore(rootReducer, enhancer);