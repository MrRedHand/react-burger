import {
    LOGIN_FAILED,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    USER_RELOGIN_FAILED,
    USER_RELOGIN_REQUEST,
    USER_RELOGIN_SUCCESS
} from "./user";


export const loginSuccess = payload => ({type : LOGIN_SUCCESS, payload})

export const loginRequest = payload => ({type : LOGIN_REQUEST})

export const loginFailed = payload => ({type : LOGIN_FAILED})


export const reloginUserStarted = payload => ({type : USER_RELOGIN_REQUEST})

export const reloginUserSuccess = payload => ({type : USER_RELOGIN_SUCCESS, payload})

export const reloginUserFail = payload => ({type : USER_RELOGIN_FAILED})