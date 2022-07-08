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
    REMOVE_INGREDIENT,
    RESORT_INGREDIENTS_IN_CONSTRUCTOR, SET_INGREDIENT_INFO
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
import {TIngredient, TIngredientCard, TServerData, TUserData} from "../../utils/types";

export const addBunToConstructor = (payload : TIngredient) => ({type : ADD_BUN_TO_CONSTRUCTOR, payload})

export const addIngredientToConstructor = (payload : TIngredient)  => ({ type: ADD_INGREDIENT_TO_CONSTRUCTOR, payload })

export const clearConstructor = () => ({type : CLEAR_CONSTRUCTOR})

export const getDataRequest = () => ({type : GET_FULLDATA_REQUEST})

export const getDataSuccess = (payload : Array<TIngredient>) => ({type : GET_FULLDATA_SUCCESS, payload})

export const getDataFailed = () => ({type : GET_FULLDATA_FAILED})


export const getOrderRequest = () => ({type : GET_ORDER_REQUEST})

export const getOrderSuccess = (payload : []) => ({type : GET_ORDER_SUCCESS, payload})

export const getOrderFailed = () => ({type : GET_ORDER_FAILED})


export const refreshTotal = (payload : number) => ({type : REFRESH_TOTAL, payload})


export const removeIngredient = (payload : number) => ({type : REMOVE_INGREDIENT, payload})

export  const  resortIngredients = (payload : Array<TIngredient>) => ({type : RESORT_INGREDIENTS_IN_CONSTRUCTOR, payload})


export const setIngredientInfo = (payload : TIngredient) => ({type : SET_INGREDIENT_INFO, payload})


export const loginSuccess = (payload : TServerData | TUserData) => ({type : LOGIN_SUCCESS, payload})

export const loginRequest = () => ({type : LOGIN_REQUEST})

export const loginFailed = () => ({type : LOGIN_FAILED})


export const reloginUserStarted = () => ({type : USER_RELOGIN_REQUEST})

export const reloginUserSuccess = (payload : TUserData) => ({type : USER_RELOGIN_SUCCESS, payload})

export const reloginUserFail = () => ({type : USER_RELOGIN_FAILED})


export const registerSuccess = (payload : TUserData | TServerData) => ({type : REGISTER_SUCCESS, payload})

export const registerRequest = () => ({type: REGISTER_REQUEST})

export const registerFailed = () => ({type : REGISTER_FAILED})


export const userResetPasswordRequest = () => ({type: PASSWORD_RESET_REQUEST})

export const userResetPasswordSuccess = () => ({type: PASSWORD_RESET_SUCCESS})

export const userResetPasswordFailed = () => ({type: PASSWORD_RESET_FAILED})