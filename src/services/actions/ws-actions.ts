import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_MESSAGE,
    WS_SEND_MESSAGE,
    WS_USER_NAME_UPDATE, WS_CONNECTION_START
} from './ws-actions-types';


// export const wsConnectionSuccess = () => {
//     return {
//         type: WS_CONNECTION_SUCCESS
//     };
// };
//
// export const wsConnectionError = () => {
//     return {
//         type: WS_CONNECTION_ERROR
//     };
// };
//
// export const wsConnectionClosed = () => {
//     return {
//         type: WS_CONNECTION_CLOSED
//     };
// };
//
// export const wsGetMessage = (message : string) => {
//     return {
//         type: WS_GET_MESSAGE,
//         payload: message
//     };
// };
//
// export const wsSendMessage = (message : string) => {
//     return {
//         type: WS_SEND_MESSAGE,
//         payload: message
//     };
// };
//
// export const wsUserNameUpdate = (userName : string) => {
//     return {
//         type: WS_USER_NAME_UPDATE,
//         payload: userName
//     };
// };

export  interface  IwsConnectionStart {
    readonly type: typeof WS_CONNECTION_START;
}

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
    message : {}
}

export interface IwsUserNameUpdate {
    readonly type: typeof WS_USER_NAME_UPDATE;
    userName : string
}

export type TwsActions = IwsConnectionStart | IwsConnectionClosed | IwsConnectionError | IwsConnectionSuccess | IwsGetMessage | IwsSendMessage | IwsUserNameUpdate

export type TwsResponse = {
    success: boolean,
    orders: Array<TwsResponseOrder>,
    total: number,
    totalToday: number
}

export type TwsResponseOrder = {
    ingredients : string[],
    _id: string,
    status: string,
    number: number,
    createdAt: string,
    updatedAt: string
}
