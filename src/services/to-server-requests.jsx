
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
import {setCookie} from "./set-cookie";
import {getCookie} from "./get-cookie";



export const loginUser = form => {
    return function (dispatch) {

        dispatch(loginRequest())

        fetch(apiUrl + 'auth/login', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(form)
        })
            .then(res => {
                if (res.ok) {
                    console.log('res', res)
                    let authToken;
                    // Ищем интересующий нас заголовок
                    res.headers.forEach(header => {
                        if (header.indexOf('Bearer') === 0) {
                            // Отделяем схему авторизации от "полезной нагрузки токена",
                            // Стараемся экономить память в куках (доступно 4кб)
                            authToken = header.split('Bearer ')[1];
                            console.log('authToken', authToken)
                        }
                    });
                    if (authToken) {
                        // Сохраняем токен в куку token
                        setCookie('token', authToken);
                    }
                    console.log('getCookie(\'token\')', getCookie('token'))
                    return res.json();
                }
            })
            .then((data) => {
                console.log('login-data', data)
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

export const checkUserToken = async () =>
    await fetch(apiUrl + 'auth/token', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // Отправляем токен и схему авторизации в заголовке при запросе данных
            Authorization: 'Bearer ' + getCookie('token')
        }
    })
    .then(res => console.log('токен ответ', res))
        .then(data => console.log('data', data))

