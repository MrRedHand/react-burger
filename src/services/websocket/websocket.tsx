import type { Middleware, MiddlewareAPI } from 'redux';
import {TAppDispatch, TRootState} from "../../utils/types";
import {wsConnectionClosed, wsConnectionError, wsConnectionSuccess} from "./ws-actions-creators";
import {TwsActions} from "./ws-actions";

export const socketMiddleware = (wsUrl: string): Middleware => {
    return ((store: MiddlewareAPI<TAppDispatch, TRootState>) => {
        let socket: WebSocket | null = null;

        return next => (action: TwsActions) => {
            const { dispatch, getState } = store;
            const type = action.type;

            if (type === 'WS_CONNECTION_START') {
                // объект класса WebSocket
                socket = new WebSocket(wsUrl);
            }
            if (socket) {

                // функция, которая вызывается при открытии сокета
                socket.onopen = event => {
                    dispatch(wsConnectionSuccess(event));
                };

                // функция, которая вызывается при ошибке соединения
                socket.onerror = event => {
                    dispatch({ type: 'WS_CONNECTION_ERROR', payload: event });
                };

                // функция, которая вызывается при получения события от сервера
                socket.onmessage = event => {
                    const { data } = event;
                    dispatch(wsConnectionError(data));
                };
                // функция, которая вызывается при закрытии соединения
                socket.onclose = event => {
                    dispatch(wsConnectionClosed(event));
                };

                if (type === 'WS_SEND_MESSAGE') {
                    const message = action.message;
                    // функция для отправки сообщения на сервер
                    socket.send(JSON.stringify(message));
                }
            }

            next(action);
        };
    }) as Middleware;
};