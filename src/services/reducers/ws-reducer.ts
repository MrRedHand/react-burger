import {
    WS_USER_NAME_UPDATE,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_MESSAGE
} from '../actions/ws-actions-types';
import {TwsActions} from "../actions/ws-actions";

type TWsState = {
    wsConnected : boolean,
    messages : string[],
    user  : string | null
}

const initialState = {
    wsConnected: false,
    messages: [],
    user : null
};

export const wsReducer = (state : TWsState = initialState, action : TwsActions) : TWsState => {
    switch (action.type) {
        case WS_CONNECTION_SUCCESS:
            return {
                ...state,
                wsConnected: true
            };

        case WS_CONNECTION_ERROR:
            return {
                ...state,
                wsConnected: false
            };

        case WS_CONNECTION_CLOSED:
            return {
                ...state,
                wsConnected: false
            };

        case WS_GET_MESSAGE:
            return {
                ...state,
                messages: []
            };
        case WS_USER_NAME_UPDATE:
            return {
                ...state,
                user: action.userName
            };

        default:
            return state;
    }
};