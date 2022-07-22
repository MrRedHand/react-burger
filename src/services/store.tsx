import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from "./reducers";
import {socketMiddleware} from "./websocket/websocket";
import {wsActions, wsActionTypes} from './actions/ws/types'

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const initSocket = {
    WS_CONNECTION_SUCCESS: wsActionTypes.WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR: wsActionTypes.WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED: wsActionTypes.WS_CONNECTION_CLOSED,
    WS_GET_MESSAGE: wsActionTypes.WS_GET_MESSAGE,
    WS_SEND_MESSAGE: wsActionTypes.WS_SEND_MESSAGE,
    WS_CONNECTION_START: wsActionTypes.WS_CONNECTION_START,
    WS_CONNECTION_STOP : wsActionTypes.WS_CONNECTION_STOP
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(
        thunk,
        socketMiddleware(initSocket)))



export const store = createStore(rootReducer, enhancer);