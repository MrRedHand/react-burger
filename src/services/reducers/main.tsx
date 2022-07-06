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
import {TMainActions} from "../actions/types";
import {TIngredientCard} from "../../utils/types";

type TStoreState = {
    allIngredients : Array<TIngredientCard>,
    currentBun : {} | null,
    constructorIngredients: Array<TIngredientCard>,
    viewIngredient: TIngredientCard | null,
    orderDetails: [],
    orderDetailsRecieved: boolean,
    totalPrice: number,
    fullDataRecieved : boolean,
    fullDataError : boolean,
    fullDataRequest: boolean,
}

const initialState : TStoreState = {
    allIngredients : [],
    currentBun : null,
    constructorIngredients: [],
    viewIngredient: {},
    orderDetails: [],
    orderDetailsRecieved: false,
    totalPrice: 0,
    fullDataRecieved : false,
    fullDataError : false,
    fullDataRequest: false,
}

export const mainReducer = (state : TStoreState = initialState, action : TMainActions) => {
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
                constructorIngredients : action.list
            }
        case GET_FULLDATA_REQUEST:
            return {
                ...state,
                fullDataRequest : true
            }
        case GET_FULLDATA_SUCCESS :
            return  {
                ...state,
                allIngredients: action.list,
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
                viewIngredient : action.data
            }
        case CLEAR_INGREDIENT_INFO :
            return {
                ...state,
                viewIngredient : null
            }
        case ADD_INGREDIENT_TO_CONSTRUCTOR:
            return {
                ...state,
                constructorIngredients: [...state.constructorIngredients, action.data]
            }
        case ADD_BUN_TO_CONSTRUCTOR :
            return {
                ...state,
                currentBun: action.data
            }
        case REMOVE_INGREDIENT :
            return {
                ...state,
                constructorIngredients: [...state.constructorIngredients.filter((value, index) => {return index !== action.id})]
            }
        case REFRESH_TOTAL:
            return {
                ...state,
                totalPrice: action.data
            }
        case GET_ORDER_REQUEST :
            return state;
        case GET_ORDER_FAILED :
            return state;
        case GET_ORDER_SUCCESS :
            return {
                ...state,
                orderDetails : action.data,
                orderDetailsRecieved : true,
            }
        default: {
            return  state;
        }

    }
}
