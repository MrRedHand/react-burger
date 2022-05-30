
// POST https://norma.nomoreparties.space/api/auth/login - эндпоинт для авторизации.
// POST https://norma.nomoreparties.space/api/auth/register - эндпоинт для регистрации пользователя.
// POST https://norma.nomoreparties.space/api/auth/logout - эндпоинт для выхода из системы.
// POST https://norma.nomoreparties.space/api/auth/token - эндпоинт обновления токена.

// Отправляем данные формы на сервер для авторизации
import {apiUrl} from "../utils/apiUrl";
import checkResponse from "../utils/checkResponse";
import {getOrderFailed, getOrderSuccess} from "./actions/get-order";
import {clearConstructor} from "./actions/clear-constructor";
import {useDispatch} from "react-redux";
import {getDataFailed, getDataSuccess} from "./actions/get-data";
import {registerFailed, registerRequest, registerSuccess} from "./actions/user-register";
import {loginFailed, loginRequest, loginSuccess} from "./actions/user-login";

export const loginUser = form => {
    return function (dispatch) {

        dispatch(loginRequest())

        fetch(apiUrl + 'auth/register', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(form)
        })
            .then(checkResponse)
            .then((data) => {
                console.log(data)
                dispatch(loginSuccess(data))
            })
            .catch((error) => {
                dispatch(loginFailed())
                console.log(error)
            });
    }
}

export const registerUser = form => {
    return function (dispatch) {

        dispatch(registerRequest())

        fetch(apiUrl + 'auth/register', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(form)
        })
            .then(checkResponse)
            .then((data) => {
                dispatch(registerSuccess(data))
            })
            .catch((error) => {
                dispatch(registerFailed())
                console.log(error)
            });
    }
}

