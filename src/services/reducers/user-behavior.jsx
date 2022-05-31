import {
    LOGIN_FAILED,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    REGISTER_FAILED,
    REGISTER_REQUEST,
    REGISTER_SUCCESS
} from "../actions/user";


const initialState = {
    isAuthenticated : false,
    registered : false,
    accessToken: '',
    refreshToken: '',
    userName : '',
    userEmail : ''
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS :
            return {
                ...state,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
                userName : action.payload.user.name,
                userEmail: action.payload.user.email,
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
        case LOGIN_FAILED :
            return {
                ...state,
                isAuthenticated: false
            }
        case LOGIN_REQUEST :
            return  state
        default: {
            return  state;
        }

    }
}