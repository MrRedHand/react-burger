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
    user : {},
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

export const userReducer = (state = initialState, action : TUserActions) : TStoreState => {
    switch (action.type) {
        case REGISTER_SUCCESS :
            return {
                ...state,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
                user : {
                    name : action.payload.user.name,
                    email : action.payload.user.email
                },
                registered : true,
            }
        case REGISTER_FAILED :
            return {
                ...state,
                registered: false
            }
        case REGISTER_REQUEST :
            return state
        case LOGIN_SUCCESS :
            return {
                ...state,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
                userName : action.payload.user.name,
                userEmail: action.payload.user.email,
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
                userName : action.payload.name,
                userEmail: action.payload.email,
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