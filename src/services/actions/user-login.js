import {LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS} from "./user";


export const loginSuccess = payload => ({type : LOGIN_SUCCESS, payload})

export const loginRequest = payload => ({type : LOGIN_REQUEST})

export const loginFailed = payload => ({type : LOGIN_FAILED})