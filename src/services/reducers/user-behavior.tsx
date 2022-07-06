import {
    LOGIN_FAILED,
    LOGIN_REQUEST,
    LOGIN_SUCCESS, PASSWORD_RESET_REQUEST, PASSWORD_RESET_SUCCESS,
    REGISTER_FAILED,
    REGISTER_REQUEST,
    REGISTER_SUCCESS, USER_RELOGIN_FAILED, USER_RELOGIN_REQUEST, USER_RELOGIN_SUCCESS
} from "../actions/user";
import {TUserActions} from "../actions/types";

type TStoreState = {
    needToCheckUser : boolean,
    isAuthenticated : boolean,
    registered : boolean,
    accessToken: string,
    refreshToken: string,
    user : {
        name : string,
        email: string
    } | {},
    requestedForgotPassword : boolean,
}

const initialState = {
    needToCheckUser : true,
    isAuthenticated : false,
    registered : false,
    accessToken: '',
    refreshToken: '',
    user : {},
    requestedForgotPassword : false,
}

export const userReducer = (state : TStoreState = initialState, action : TUserActions) => {
    switch (action.type) {
        case REGISTER_SUCCESS :
            return {
                ...state,
                accessToken: action.data.accessToken,
                refreshToken: action.data.refreshToken,
                user : {
                    name : action.data.user.name,
                    email : action.data.user.email
                },
                registered : true,
            }
        case REGISTER_FAILED :
            return {
                ...state,
                registered: false,
            }
        case REGISTER_REQUEST :
            return state
        case LOGIN_SUCCESS :
            return {
                ...state,
                accessToken: action.data.accessToken,
                refreshToken: action.data.refreshToken,
                user : {
                    name : action.data.user.name,
                    email : action.data.user.email
                },
                isAuthenticated : true
            }
        case USER_RELOGIN_REQUEST :
            return {
                ...state,
                needToCheckUser : true
            }
        case USER_RELOGIN_SUCCESS :
            return {
                ...state,
                user : {
                    name : action.data.user.name,
                    email : action.data.user.email
                },
                isAuthenticated : true,
                needToCheckUser : false
            }
        case USER_RELOGIN_FAILED :
            return {
                ...state,
                needToCheckUser: false
            }
        case LOGIN_FAILED :
            return {
                ...state,
                isAuthenticated: false
            }
        case LOGIN_REQUEST :
            return  state
        case PASSWORD_RESET_REQUEST :
            return {
                ...state,
                requestedForgotPassword : true
            }
        case PASSWORD_RESET_SUCCESS :
            return  {
                ...state,
                requestedForgotPassword : false
            }
        default: {
            return  state;
        }

    }
}