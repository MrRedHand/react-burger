import {GET_FULLDATA_FAILED, GET_FULLDATA_REQUEST, GET_FULLDATA_SUCCESS} from "./main";

export const getDataRequest = () => ({type : GET_FULLDATA_REQUEST})

export const getDataSuccess = (payload : any) => ({type : GET_FULLDATA_SUCCESS, payload})

export const getDataFailed = () => ({type : GET_FULLDATA_FAILED})