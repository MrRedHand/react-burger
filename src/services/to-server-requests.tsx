
// POST https://norma.nomoreparties.space/api/auth/login - эндпоинт для авторизации.
// POST https://norma.nomoreparties.space/api/auth/register - эндпоинт для регистрации пользователя.
// POST https://norma.nomoreparties.space/api/auth/logout - эндпоинт для выхода из системы.
// POST https://norma.nomoreparties.space/api/auth/token - эндпоинт обновления токена.

import {getOrderFailed, getOrderRequest, getOrderSuccess} from "./actions/get-order";
import {clearConstructor} from "./actions/clear-constructor";
import {getDataFailed, getDataSuccess} from "./actions/get-data";
import {registerFailed, registerRequest, registerSuccess} from "./actions/user-register";
import {loginFailed, loginRequest, loginSuccess} from "./actions/user-login";
import {
    userResetPasswordFailed,
    userResetPasswordRequest,
    userResetPasswordSuccess
} from "./actions/user-reset-password";
import {TLoginFormFields, TRegisterFormFields, TForgotFormFields, TResetFormFields, TServerResponse, TServerData, TServerRequestOptions} from "../utils/types"
import {Dispatch} from "redux";

export const apiUrl = 'https://norma.nomoreparties.space/api/'

export const checkResponse = (response : TServerResponse) => {
    if (response.ok) {
        return response.json();
    } else {
        return Promise.reject(`Ошибка ${response.status}`);
    }
}

export const refreshToken = () => {
    return fetch(apiUrl + 'auth/token', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            token : localStorage.getItem("refreshToken")
        })
    }).then(checkResponse)
}

export const fetchToRefreshToken = async (url : string, options : TServerRequestOptions) => {
    try {
        const res = await fetch(url, options)
        return await checkResponse(res)
    } catch (error : any) {
        console.log('fetchToRefreshToken error', error);
        if (error.message === "jwt expired") {
            const refreshedData = await refreshToken()

            if (!refreshedData.success) {
                Promise.reject(refreshedData)
            }

            let newToken = refreshedData.accessToken.split('Bearer ')[1]

            localStorage.setItem('refreshToken', refreshedData.refreshToken)
            localStorage.setItem('accessToken', newToken)

            options.headers.authorization = newToken

            const res = await  fetch(url, options)
            return await checkResponse(res)
        } else {
            Promise.reject(error)
        }
    }
}

export const getUser = () => {
    return fetchToRefreshToken(apiUrl + 'auth/user', {
        headers : {
            'Content-Type' : 'application/json',
            authorization : `Bearer ${localStorage.getItem('accessToken')}`
        },
    })
}
//
// export const updateUser = (user) => {
//     return fetchToRefreshToken(apiUrl + 'auth/user', {
//         method : "PATCH",
//         headers : {
//             'Content-Type' : 'application/json',
//             authorization : localStorage.getItem('accessToken')
//         },
//         body: JSON.stringify(user)
//     })
// }

export const loginUser = ( form : TLoginFormFields ) => {
    return function (dispatch : Dispatch) {

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
            .then(checkResponse)
            .then((data: TServerData) => {
                let accessToken;
                let refreshToken;
                if (data.accessToken) {
                    if (data.accessToken.indexOf('Bearer') === 0) {
                        accessToken = data.accessToken.split('Bearer ')[1];
                    }
                }

                if (data.refreshToken) {
                    refreshToken = data.refreshToken
                }

                if (refreshToken) {
                    localStorage.setItem('refreshToken', refreshToken)
                }

                if (accessToken) {
                    // Сохраняем токен в куку token
                    localStorage.setItem('accessToken', accessToken)
                }

                dispatch(loginSuccess(data))
            })
            .catch((error) => {
                dispatch(loginFailed())
                console.log(error)
            });
    }
}

export const registerUser = (form : TRegisterFormFields) => {
    return function (dispatch : Dispatch) {

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


export  const forgotPassword = (data : TForgotFormFields) => {
    return function (dispatch : Dispatch) {
        dispatch(userResetPasswordRequest())

        fetch(apiUrl + 'password-reset', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(checkResponse)
            .then((data) => {

            })
            .catch((error) => {
                console.log(error)
            });
    }
}


export  const resetPassword = (data : TResetFormFields) => {
    return function (dispatch : Dispatch) {
        fetch(apiUrl + 'password-reset/reset', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(checkResponse)
            .then((data) => {
                console.log('resetPassword data', data)
                dispatch(userResetPasswordSuccess())
            })
            .catch((error) => {
                dispatch(userResetPasswordFailed())
                console.log('resetPassword error', error)
            });
    }
}


export  const  getFullData = () => {
    return function (dispatch : Dispatch) {
        dispatch(getDataFailed())

        fetch(apiUrl + 'ingredients/')
            .then(checkResponse)
            .then((data) => {
                dispatch(getDataSuccess(data.data))
                console.log("full data", data.data)
            })
            .catch((error) => {
                dispatch(getDataFailed())
                console.log(error)
            });
    }
}

export  const fetchOrder = (ingredientsArr : Array<string>) => {
    return function (dispatch : Dispatch) {

        console.log(ingredientsArr)

        dispatch(getOrderRequest())

        fetch(apiUrl + 'orders/', {
            headers: {
                'Content-Type' : 'application/json'},
            method: 'POST',
            body: JSON.stringify({ingredients : ingredientsArr})
        })
            .then(checkResponse)
            .then((data) => {
                dispatch(getOrderSuccess(data))
                dispatch(clearConstructor())
            })
            .catch((error) => {
                dispatch(getOrderFailed())
                console.log(error)
            });
    }
}




