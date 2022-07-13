import type { Middleware, MiddlewareAPI } from 'redux';
import {TAppDispatch, TRootState} from "../../utils/types";
import {TwsOrderActions, wsActionTypes} from "../actions/ws/types";
import {wsActions, wsAllActions} from '../actions/wsOrderActions'

export const socketMiddleware = (wsAction: wsAllActions):Middleware  => {
    return ((store: MiddlewareAPI<TAppDispatch, TRootState>) => {
        let socket: WebSocket | null = null;

        return (next: any) => (action: any) => {
            console.log('action', action)
            const { dispatch } = store;
            const { type, wsUrl, payload } = action;

            const {
                wsConnectionSuccess,
                wsConnectionError,
                wsConnectionClosed,
                wsGetMessage,
                wsSendMessage
            } = wsAction;

            if (type === wsActionTypes.WS_CONNECTION_START) {
                socket = new WebSocket(wsUrl);
            }

            if (socket) {
                socket.onopen = (event: any) => {
                    console.log('onopen', event)
                    dispatch(wsConnectionSuccess(event));
                };

                socket.onerror = (event: any)  => {
                    console.log('onerror', event)
                    dispatch(wsConnectionError(event));
                };

                socket.onmessage = (event: any)  => {
                    console.log('onmessage', event)
                    const { data } = event;
                    const parsedData = JSON.parse(data);
                    const { success, ...restParsedData } = parsedData;
                    dispatch(wsGetMessage(restParsedData));
                };

                socket.onclose = (event: any)  => {
                    console.log('onclose', event)
                    dispatch(wsConnectionClosed(event));
                };

                if (type === wsSendMessage) {
                    console.log('message', payload)
                    const message = { ...payload };
                    socket.send(JSON.stringify(message));
                }
            }

            if (type === wsActionTypes.WS_CONNECTION_END && socket) {
                socket.close();
                console.log('socket.close by me, lol');
            }

            next(action);
        };
    }) as Middleware;
};