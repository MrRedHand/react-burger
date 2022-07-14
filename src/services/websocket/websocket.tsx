import { Middleware, MiddlewareAPI } from 'redux';
import {wsActions} from "../actions/ws/types";

export const socketMiddleware = (wsActions: wsActions): Middleware =>
        (store: MiddlewareAPI) => {
            let socket: WebSocket | null = null;

            return (next) => (action) => {
                const { dispatch } = store;
                const { type, payload, wsUrl } = action;
                if (type === wsActions.WS_CONNECTION_START) {
                    socket = new WebSocket(wsUrl);
                }

                if (type === wsActions.WS_CONNECTION_STOP && socket !== null) {
                    socket.close(1000, 'юзер закры соединение');
                }

                if (socket) {
                    socket.onopen = (event) => {
                        dispatch({
                            type: wsActions.WS_CONNECTION_SUCCESS,
                            payload: event,
                        });
                    };

                    socket.onerror = (event) => {
                        dispatch({
                            type: wsActions.WS_CONNECTION_ERROR,
                            payload: event,
                        });
                        console.log('error',event)
                    };

                    socket.onmessage = (event) => {
                        const { data } = event;
                        if (data?.includes('ping')) {
                            if (socket !== null) {
                                socket.send('pong');
                            }
                        }
                        const { success, orders, total, totalToday } = JSON.parse(data);
                        if (success) {
                            dispatch({
                                type: wsActions.WS_GET_MESSAGE,
                                payload: {
                                    orders,
                                    total,
                                    totalToday,
                                },
                            });
                        }
                    };

                    socket.onclose = (event) => {
                        dispatch({
                            type: wsActions.WS_CONNECTION_CLOSED,
                            payload: event,
                        });
                    };

                    if (type === wsActions.WS_SEND_MESSAGE) {
                        socket.send(JSON.stringify(payload));
                    }
                }

                next(action);
            };
        };