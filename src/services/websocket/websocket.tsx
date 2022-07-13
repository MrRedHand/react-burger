import type { Middleware, MiddlewareAPI } from 'redux';
import {TAppDispatch, TRootState} from "../../utils/types";
import {TwsOrderActions, wsActionTypes} from "../actions/ws/types";
import {wsConnectionClosed, wsConnectionError, wsConnectionSuccess, wsGetMessage} from "../actions/wsOrderActions";

export const socketMiddleware = (wsAction: TwsOrderActions):Middleware  => {
    return ((store: MiddlewareAPI<TAppDispatch, TRootState>) => {
        let socket: WebSocket | null = null;

        return (next: any) => (action: any) => {
            const { dispatch } = store;

            if (wsAction.type === wsActionTypes.WS_CONNECTION_START) {
                socket = new WebSocket(wsAction.wsUrl);
            }

            if (socket) {
                socket.onopen = (event: any) => {
                    console.log('onopen', event)
                    dispatch(wsConnectionSuccess(event));
                };

                socket.onerror = (event: any)  => {
                    dispatch(wsConnectionError(event));
                };

                socket.onmessage = (event: any)  => {
                    const { data } = event;
                    const parsedData = JSON.parse(data);
                    const { success, ...restParsedData } = parsedData;
                    dispatch(wsGetMessage(restParsedData));
                };

                socket.onclose = (event: any)  => {
                    console.log('onclose', event)
                    dispatch(wsConnectionClosed(event));
                };

                if (wsAction.type === wsActionTypes.WS_SEND_MESSAGE) {
                    const message = { ...wsAction.payload };
                    socket.send(JSON.stringify(message));
                }
            }

            if (wsAction.type === wsActionTypes.WS_CONNECTION_END && socket) {
                socket.close();
                console.log('socket.close by me, lol');
            }

            next(action);
        };
    }) as Middleware;
};