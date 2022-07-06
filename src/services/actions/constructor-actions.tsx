import {
    ADD_BUN_TO_CONSTRUCTOR,
    ADD_INGREDIENT_TO_CONSTRUCTOR,
    CLEAR_CONSTRUCTOR,
    GET_FULLDATA_FAILED,
    GET_FULLDATA_REQUEST,
    GET_FULLDATA_SUCCESS,
    GET_ORDER_FAILED,
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    REFRESH_TOTAL,
    REMOVE_INGREDIENT, RESORT_INGREDIENTS_IN_CONSTRUCTOR,
    SET_INGREDIENT_INFO
} from "./main";
import {
    LOGIN_FAILED,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    PASSWORD_RESET_FAILED,
    PASSWORD_RESET_REQUEST,
    PASSWORD_RESET_SUCCESS,
    REGISTER_FAILED,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    USER_RELOGIN_FAILED,
    USER_RELOGIN_REQUEST,
    USER_RELOGIN_SUCCESS
} from "./user";
import {TIngredient, TIngredientCard} from "../../utils/types";




export const addBunToConstructor = (payload : any) => ({type : ADD_BUN_TO_CONSTRUCTOR, payload})

export const addIngredientToConstructor = (payload : any)  => ({ type: ADD_INGREDIENT_TO_CONSTRUCTOR, payload })

export const clearConstructor = () => ({type : CLEAR_CONSTRUCTOR})

export const getDataRequest = () => ({type : GET_FULLDATA_REQUEST})

export const getDataSuccess = (payload : any) => ({type : GET_FULLDATA_SUCCESS, payload})

export const getDataFailed = () => ({type : GET_FULLDATA_FAILED})

export const getOrderRequest = () => ({type : GET_ORDER_REQUEST})

export const getOrderSuccess = (payload : any) => ({type : GET_ORDER_SUCCESS, payload})

export const getOrderFailed = () => ({type : GET_ORDER_FAILED})

export const refreshTotal = (payload : any) => ({type : REFRESH_TOTAL, payload})

export const removeIngredient = (payload : any) => ({type : REMOVE_INGREDIENT, payload})

export const setIngredientInfo = (payload : any) => ({type : SET_INGREDIENT_INFO, payload})

export  const  resortIngredients = (payload : any) => ({type : RESORT_INGREDIENTS_IN_CONSTRUCTOR, payload})


export const loginSuccess = (payload : any) => ({type : LOGIN_SUCCESS, payload})

export const loginRequest = () => ({type : LOGIN_REQUEST})

export const loginFailed = () => ({type : LOGIN_FAILED})


export const reloginUserStarted = () => ({type : USER_RELOGIN_REQUEST})

export const reloginUserSuccess = (user : {name : string, email : string,}) => ({type : USER_RELOGIN_SUCCESS, user})

export const reloginUserFail = () => ({type : USER_RELOGIN_FAILED})

export const registerSuccess = (payload : any) => ({type : REGISTER_SUCCESS, payload})

export const registerRequest = () => ({type: REGISTER_REQUEST})

export const registerFailed = () => ({type : REGISTER_FAILED})



export const userResetPasswordRequest = () => ({type: PASSWORD_RESET_REQUEST})

export const userResetPasswordSuccess = () => ({type: PASSWORD_RESET_SUCCESS})

export const userResetPasswordFailed = () => ({type: PASSWORD_RESET_FAILED})


