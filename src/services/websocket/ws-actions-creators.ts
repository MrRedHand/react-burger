import {
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS
} from "./ws-actions-types";


export const wsConnectionStart = () => ({type : WS_CONNECTION_START})

export const wsConnectionSuccess = (payload : Event) => ({type : WS_CONNECTION_SUCCESS, payload})

export const wsConnectionClosed = (payload : Event) => ({type : WS_CONNECTION_CLOSED, payload})

export const wsConnectionError = (payload : string) => ({type : WS_CONNECTION_ERROR, payload})