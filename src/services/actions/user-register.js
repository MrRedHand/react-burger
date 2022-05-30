import {REGISTER_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS} from "./user";

export const registerSuccess = payload => ({type : REGISTER_SUCCESS, payload})

export const registerRequest = payload => ({type: REGISTER_REQUEST})

export const registerFailed = payload => ({type : REGISTER_FAILED})