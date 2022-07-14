
export type wsActions = {
    WS_CONNECTION_SUCCESS: string;
    WS_CONNECTION_ERROR: string;
    WS_CONNECTION_CLOSED: string;
    WS_GET_MESSAGE: string;
    WS_SEND_MESSAGE: string;
    WS_CONNECTION_START: string;
    WS_CONNECTION_STOP: string;
};

export const enum wsActionTypes {
    WS_CONNECTION_START = 'WS_CONNECTION_START',
    WS_CONNECTION_STOP = 'WS_CONNECTION_STOP',
    WS_CONNECTION_END = 'WS_CONNECTION_END',
    WS_CONNECTION_SUCCESS = 'WS_CONNECTION_SUCCESS',
    WS_CONNECTION_ERROR = 'WS_CONNECTION_ERROR',
    WS_CONNECTION_CLOSED = 'WS_CONNECTION_CLOSED',
    WS_GET_MESSAGE = 'WS_GET_MESSAGE',
    WS_SEND_MESSAGE = 'WS_SEND_MESSAGE'
}

export interface IwsConnectionStart {
    type: wsActionTypes.WS_CONNECTION_START;
    wsUrl: string;
}
export interface IwsConnectionClose {
    type: wsActionTypes.WS_CONNECTION_END;
}
export interface IwsConnectionSuccess {
    type: wsActionTypes.WS_CONNECTION_SUCCESS;
    payload: any;
}
export interface IwsConnectionError {
    type: wsActionTypes.WS_CONNECTION_ERROR;
    payload: any;
}
export interface IwsConnectionClosed {
    type: wsActionTypes.WS_CONNECTION_CLOSED;
    payload: any;
}
export interface IwsGetMessage {
    type: wsActionTypes.WS_GET_MESSAGE;
    payload: any;
}
export interface IwsSendMessage {
    type: wsActionTypes.WS_SEND_MESSAGE;
    payload: any;
}

export type TwsOrderActions =
    IwsConnectionStart
    | IwsConnectionClose
    | IwsConnectionSuccess
    | IwsConnectionError
    | IwsConnectionClosed
    | IwsGetMessage
    | IwsSendMessage;


