import {
    LOGIN_FAILED,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    USER_RELOGIN_FAILED,
    USER_RELOGIN_REQUEST,
    USER_RELOGIN_SUCCESS
} from "./user";


export const loginSuccess = (payload : any) => ({type : LOGIN_SUCCESS, payload})

export const loginRequest = (payload? : any) => ({type : LOGIN_REQUEST})

export const loginFailed = (payload? : any) => ({type : LOGIN_FAILED})


export const reloginUserStarted = (payload? : any) => ({type : USER_RELOGIN_REQUEST})

export const reloginUserSuccess = (payload : any) => ({type : USER_RELOGIN_SUCCESS, payload})

export const reloginUserFail = (payload? : any) => ({type : USER_RELOGIN_FAILED})