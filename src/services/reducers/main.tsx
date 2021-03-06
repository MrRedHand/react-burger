import {
    ADD_BUN_TO_CONSTRUCTOR,
    ADD_INGREDIENT_TO_CONSTRUCTOR, CLEAR_CONSTRUCTOR,
    CLEAR_INGREDIENT_INFO,
    GET_FULLDATA_FAILED,
    GET_FULLDATA_REQUEST,
    GET_FULLDATA_SUCCESS, GET_ORDER_FAILED, GET_ORDER_REQUEST, GET_ORDER_SUCCESS, REFRESH_TOTAL,
    REMOVE_INGREDIENT, RESORT_INGREDIENTS_IN_CONSTRUCTOR,
    SET_INGREDIENT_INFO
} from "../actions/main";
import {TIngredient, TIngredientCard} from "../../utils/types";
import {TMainActions} from "../actions/action-types";

export type TMainStoreState = {
    allIngredients : Array<TIngredient>,
    currentBun : TIngredient | null,
    constructorIngredients: Array<TIngredient>,
    viewIngredient: TIngredient | null,
    orderDetails: {
        name : string,
        number : number
    } | null,
    orderDetailsRecieved: boolean,
    totalPrice: number,
    fullDataRecieved : boolean,
    fullDataError : boolean,
    fullDataRequest: boolean,
}

export const initialState : TMainStoreState = {
    allIngredients : [],
    currentBun : null,
    constructorIngredients: [],
    viewIngredient: null,
    orderDetails: null,
    orderDetailsRecieved: false,
    totalPrice: 0,
    fullDataRecieved : false,
    fullDataError : false,
    fullDataRequest: false,
}

export const mainReducer = (state: TMainStoreState = initialState, action : TMainActions) : TMainStoreState => {
    switch (action.type) {
        case CLEAR_CONSTRUCTOR :
            return {
                ...state,
                constructorIngredients: [],
                currentBun: null,
            }
        case RESORT_INGREDIENTS_IN_CONSTRUCTOR :
            return {
                ...state,
                constructorIngredients : action.payload
            }
        case GET_FULLDATA_REQUEST:
            return {
                ...state,
                fullDataRequest : true
            }
        case GET_FULLDATA_SUCCESS :
            return  {
                ...state,
                allIngredients: action.payload,
                fullDataRecieved: true,
                fullDataError : false,
            }
        case  GET_FULLDATA_FAILED :
            return  {
                ...state,
                fullDataError : true,
                fullDataRecieved : false
            }
        case SET_INGREDIENT_INFO :
            return {
                ...state,
                viewIngredient : action.payload
            }
        case CLEAR_INGREDIENT_INFO :
            return {
                ...state,
                viewIngredient : null
            }
        case ADD_INGREDIENT_TO_CONSTRUCTOR:
            return {
                ...state,
                constructorIngredients: [...state.constructorIngredients, action.payload]
            }
        case ADD_BUN_TO_CONSTRUCTOR :
            return {
                ...state,
                currentBun: action.payload
            }
        case REMOVE_INGREDIENT :
            return {
                ...state,
                constructorIngredients: [...state.constructorIngredients.filter((value, index) => {return index !== action.payload})]
            }
        case REFRESH_TOTAL:
            return {
                ...state,
                totalPrice: action.payload
            }
        case GET_ORDER_REQUEST :
            return state;
        case GET_ORDER_FAILED :
            return state;
        case GET_ORDER_SUCCESS :
            return {
                ...state,
                orderDetails : {
                    name : action.payload.name,
                    number : action.payload.order.number
                },
                orderDetailsRecieved : true,
            }
        default: {
            return  state;
        }

    }
}
