import {PASSWORD_RESET_FAILED, PASSWORD_RESET_REQUEST, PASSWORD_RESET_SUCCESS} from "./user";


export const userResetPasswordRequest = payload => ({type: PASSWORD_RESET_REQUEST})

export const userResetPasswordSuccess = payload => ({type: PASSWORD_RESET_SUCCESS})

export const userResetPasswordFailed = payload => ({type: PASSWORD_RESET_FAILED})