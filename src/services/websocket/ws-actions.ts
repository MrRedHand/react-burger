import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_MESSAGE,
    WS_SEND_MESSAGE,
    WS_USER_NAME_UPDATE
} from './ws-actions-types';

export interface IwsConnectionSuccess {
    readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IwsConnectionError {
    readonly type: typeof WS_CONNECTION_ERROR;
}

export interface IwsConnectionClosed {
    readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IwsGetMessage {
    readonly type: typeof WS_GET_MESSAGE;
    message : string
}

export interface IwsSendMessage {
    readonly type: typeof WS_SEND_MESSAGE;
    message : string
}

export interface IwsUserNameUpdate {
    readonly type: typeof WS_USER_NAME_UPDATE;
    userName : string
}

export type TwsActions = IwsConnectionClosed | IwsConnectionError | IwsConnectionSuccess | IwsGetMessage | IwsSendMessage | IwsUserNameUpdate
