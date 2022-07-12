import {
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS, WS_SEND_MESSAGE
} from "./ws-actions-types";
import {TwsResponse} from "./ws-actions";


export const wsConnectionStart = () => ({type : WS_CONNECTION_START})

export const wsConnectionSuccess = (payload : Event) => ({type : WS_CONNECTION_SUCCESS, payload})

export const wsConnectionClosed = (payload : Event) => ({type : WS_CONNECTION_CLOSED, payload})

export const wsConnectionError = (payload : string) => ({type : WS_CONNECTION_ERROR, payload})




export const wsSendMessage = (data : TwsResponse) => ({type : WS_SEND_MESSAGE, data})