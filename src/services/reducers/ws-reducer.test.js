import {initialState, wsReducer} from "./ws-reducer";
import {wsActions, wsConnectionClose, wsConnectionSuccess, wsGetMessage} from "../actions/wsOrderActions";
import {wsActionTypes} from "../actions/ws/types";

const wsTestData = {
    orders: [
        {
            _id: '23a001c275bd6',
            ingredients: ['23cab0026a733c6'],
            status: 'done',
            name: 'Краторный бургер',
            createdAt: '2023-12-12',
            updatedAt: '2023-12-12',
            number: 232333,
        },
    ],
    total: 23901,
    totalToday: 23,
};

describe('WebSocketReducer', () => {
    it('Установка initialState', () => {
        expect(wsReducer(undefined, {})).toEqual(initialState);
    });

    it('Соединение с сервером', () => {
        expect(wsReducer(initialState, wsConnectionSuccess())).toEqual({
            ...initialState,
            wsConnected: true,
        });
    });

    it('Закрытие соединения с сервером', () => {
        expect(
            wsReducer(initialState, wsConnectionClose())
        ).toEqual({
            ...initialState,
            wsConnected: false,
        });
    });

    it('Cохранение данных', () => {
        const result = wsReducer(initialState, wsGetMessage(wsTestData))

        expect(result).toEqual({
            ...initialState,
            orders: wsTestData.orders,
            total: wsTestData.total,
            totalToday: wsTestData.totalToday,
        });
    });

    it('Закрытие соединения', () => {
        expect(wsReducer(initialState, wsConnectionClose())).toEqual({
            ...initialState,
            wsConnected: false,
        });
    });

})