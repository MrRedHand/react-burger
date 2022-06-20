import {GET_ORDER_FAILED, GET_ORDER_REQUEST, GET_ORDER_SUCCESS} from "./main";

export const getOrderRequest = () => ({type : GET_ORDER_REQUEST})

export const getOrderSuccess = (payload : any) => ({type : GET_ORDER_SUCCESS, payload})

export const getOrderFailed = () => ({type : GET_ORDER_FAILED})