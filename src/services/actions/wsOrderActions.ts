import {
    IwsConnectionClose,
    IwsConnectionClosed,
    IwsConnectionError,
    IwsConnectionStart,
    IwsConnectionSuccess,
    IwsGetMessage,
    IwsSendMessage, TwsOrderActions,
    wsActionTypes
} from "./ws/types";


export const wsConnectionStart = (wsUrl: string): IwsConnectionStart => {
    return {
        type: wsActionTypes.WS_CONNECTION_START,
        wsUrl: wsUrl
    };
};

export const wsConnectionClose = (): IwsConnectionClose => {
    return {
        type: wsActionTypes.WS_CONNECTION_END
    };
};

export const wsConnectionSuccess = (payload: any) : IwsConnectionSuccess => {
    return {
        type: wsActionTypes.WS_CONNECTION_SUCCESS,
        payload: payload
    };
};

export const wsConnectionError = (payload: any): IwsConnectionError => {
    return {
        type: wsActionTypes.WS_CONNECTION_ERROR,
        payload: payload
    };
};

export const wsConnectionClosed = (payload: any): IwsConnectionClosed => {
    return {
        type: wsActionTypes.WS_CONNECTION_CLOSED,
        payload: payload
    };
};

export const wsGetMessage = (message: any): IwsGetMessage => {
    return {
        type: wsActionTypes.WS_GET_MESSAGE,
        payload: message
    };
};

export const wsSendMessage = (message: any): IwsSendMessage => {
    return {
        type: wsActionTypes.WS_SEND_MESSAGE,
        payload: message
    };
};



export const wsActions = {
    wsConnectionStart,
    wsConnectionClose,
    wsConnectionSuccess,
    wsConnectionError,
    wsConnectionClosed,
    wsGetMessage,
    wsSendMessage
}

export type wsAllActions = typeof wsActions;