import {
    ADD_BUN_TO_CONSTRUCTOR,
    ADD_INGREDIENT_TO_CONSTRUCTOR,
    CLEAR_CONSTRUCTOR,
    CLEAR_INGREDIENT_INFO,
    GET_FULLDATA_FAILED,
    GET_FULLDATA_REQUEST,
    GET_FULLDATA_SUCCESS, GET_ORDER_FAILED,
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    REFRESH_TOTAL,
    REMOVE_INGREDIENT,
    RESORT_INGREDIENTS_IN_CONSTRUCTOR,
    SET_INGREDIENT_INFO
} from "./main";
import {
    LOGIN_FAILED,
    LOGIN_REQUEST,
    LOGIN_SUCCESS, PASSWORD_RESET_FAILED, PASSWORD_RESET_REQUEST, PASSWORD_RESET_SUCCESS,
    REGISTER_FAILED,
    REGISTER_REQUEST,
    REGISTER_SUCCESS, USER_RELOGIN_FAILED,
    USER_RELOGIN_REQUEST, USER_RELOGIN_SUCCESS
} from "./user";
import {TIngredient, TIngredientCard} from "../../utils/types";


////////MAIN///////////

export interface IGetFullDataRequest {
    readonly type: typeof GET_FULLDATA_REQUEST;
}

export interface IGetFullDataSuccess {
    readonly type: typeof GET_FULLDATA_SUCCESS;
    payload : Array<TIngredient>
}

export interface IGetFullDataFailed {
    readonly type: typeof GET_FULLDATA_FAILED;
}

export interface ISetIngredientInfo {
    readonly type: typeof SET_INGREDIENT_INFO;
    payload : TIngredient
}

export interface IClearIngredientInfo {
    readonly type: typeof CLEAR_INGREDIENT_INFO;
}

export interface IAddIngredientToConstructor {
    readonly type: typeof ADD_INGREDIENT_TO_CONSTRUCTOR;
    payload : TIngredientCard
}

export interface IRemoveIngredient {
    readonly type: typeof REMOVE_INGREDIENT;
    payload : number
}

export interface IAddBunToConstructor {
    readonly type: typeof ADD_BUN_TO_CONSTRUCTOR;
    payload : {}
}

export interface IClearConstructor {
    readonly type: typeof CLEAR_CONSTRUCTOR;
}

export interface IRefreshTotal {
    readonly type: typeof REFRESH_TOTAL;
    payload : number;
}

export interface IResortIngredientsInConstructor {
    readonly type: typeof RESORT_INGREDIENTS_IN_CONSTRUCTOR;
    payload : Array<TIngredientCard>
}

export interface IGetOrderRequest {
    readonly type: typeof GET_ORDER_REQUEST;
}

export interface IGetOrderSuccess {
    readonly type: typeof GET_ORDER_SUCCESS;
    payload : []
}

export interface IGetOrderFailed {
    readonly type: typeof GET_ORDER_FAILED;
}

export type TMainActions = IGetFullDataRequest | IGetFullDataFailed | IGetFullDataSuccess
    | ISetIngredientInfo | IClearIngredientInfo | IAddIngredientToConstructor | IRemoveIngredient |
    IAddBunToConstructor | IClearConstructor | IRefreshTotal | IResortIngredientsInConstructor |
    IGetOrderRequest | IGetOrderSuccess | IGetOrderFailed



///////USER///////

export interface IRegisterRequest {
    readonly type: typeof REGISTER_REQUEST;
}

export interface IRegisterSuccess {
    readonly type: typeof REGISTER_SUCCESS;
    payload : {
        accessToken : string,
        refreshToken : string,
        user : {
            name : string,
            email : string
        }
    }
}

export interface IRegisterFailed {
    readonly type: typeof REGISTER_FAILED;
}

export interface ILoginRequest {
    readonly type: typeof LOGIN_REQUEST;
}

export interface ILoginSuccess {
    readonly type: typeof LOGIN_SUCCESS;
    payload : {
        accessToken : string,
        refreshToken : string,
        user : {
            name : string,
            email : string
        }
    }
}

export interface ILoginFailed {
    readonly type: typeof LOGIN_FAILED;
}

export interface IUserReloginRequest {
    readonly type: typeof USER_RELOGIN_REQUEST;
}

export interface IUserReloginSuccess {
    readonly type: typeof USER_RELOGIN_SUCCESS;
    payload : {
        name : string,
        email : string
    }
}

export interface IUserReloginFailed {
    readonly type: typeof USER_RELOGIN_FAILED;
}

export interface IPasswordResetRequest {
    readonly type: typeof PASSWORD_RESET_REQUEST;
}

export interface IPasswordResetSuccess {
    readonly type: typeof PASSWORD_RESET_SUCCESS;
}

export interface IPasswordResetFailed {
    readonly type: typeof PASSWORD_RESET_FAILED;
}

export type TUserActions = IRegisterRequest | IRegisterSuccess | IRegisterFailed |
    ILoginRequest | ILoginSuccess | ILoginFailed |  IUserReloginRequest | IUserReloginSuccess | IUserReloginFailed |
    IPasswordResetRequest | IPasswordResetSuccess | IPasswordResetFailed