import {REGISTER_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS} from "./user";

export const registerSuccess = (payload : any) => ({type : REGISTER_SUCCESS, payload})

export const registerRequest = (payload? : any) => ({type: REGISTER_REQUEST})

export const registerFailed = (payload? : any) => ({type : REGISTER_FAILED})