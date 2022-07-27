import {initialState, userReducer} from "./user-behavior";
import {loginSuccess, registerSuccess, userResetPasswordRequest} from "../actions/actions-creators";

describe('UserReducer', () => {
    it('Установка initialState', () => {
        expect(userReducer(undefined, {})).toEqual(initialState);
    });

    it('Проверка регистрации юзера', () => {
        const testData = {
            ...initialState,
            accessToken: 'asdasdads',
            refreshToken: 'zxczxczxc',
            user : {
                name : 'Artemka',
                email : 'artemka@artemka.ru'
            },
            registered : true
        }

        const result = userReducer(initialState, registerSuccess(testData))

        expect(result).toEqual(testData)
    })

    it('Проверка состояния "забыл пароль"', () => {
        const result = userReducer(initialState, userResetPasswordRequest())

        expect(result).toEqual({
            ...initialState,
            requestedForgotPassword : true
        })
    })

    it('Проверка проверки залогинен ли юзер', () => {
        const testData = {
            ...initialState,
            accessToken: 'asdasdads',
            refreshToken: 'zxczxczxc',
            user : {
                name : 'Artemka',
                email : 'artemka@artemka.ru'
            },
            isAuthenticated : true
        }

        const result = userReducer(initialState, loginSuccess(testData))

        expect(result).toEqual(testData)
    })
})