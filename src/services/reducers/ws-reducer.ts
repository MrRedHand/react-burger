import {TwsOrderActions, wsActionTypes} from '../actions/ws/types';

type TWsState = {
    wsConnected : boolean,
    userOrders : Array<{}> | null,
    ordersFeed : Array<{}> | null
}

const initialState = {
    wsConnected: false,
    userOrders : null,
    ordersFeed : null
};

export const wsReducer = (state : TWsState = initialState, action : TwsOrderActions) : TWsState => {
    switch (action.type) {
        case wsActionTypes.WS_CONNECTION_SUCCESS:
            return {
                ...state,
                wsConnected: true
            };

        case wsActionTypes.WS_CONNECTION_ERROR:
            return {
                ...state,
                wsConnected: false
            };

        case wsActionTypes.WS_CONNECTION_CLOSED:
            return {
                ...state,
                wsConnected: false
            };

        default:
            return state;
    }
};