import {TwsOrderActions, wsActionTypes} from '../actions/ws/types';
import {TOrder} from "../../utils/types";

type TWsState = {
    wsConnected : boolean,
    orders : Array<TOrder> | null,
    total : number,
    totalToday : number

}

const initialState = {
    wsConnected: false,
    orders : null,
    total : 0,
    totalToday : 0
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

        case wsActionTypes.WS_CONNECTION_END:
            return {
                ...state,
                orders : null
            }

        case wsActionTypes.WS_GET_MESSAGE:
            return {
                ...state,
                orders : action.payload.orders,
                total : action.payload.total,
                totalToday : action.payload.totalToday
            }

        default:
            return state;
    }
};