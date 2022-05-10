import {
    ADD_BUN_TO_CONSTRUCTOR,
    ADD_INGREDIENT_TO_CONSTRUCTOR,
    CLEAR_INGREDIENT_INFO,
    GET_FULLDATA_FAILED,
    GET_FULLDATA_REQUEST,
    GET_FULLDATA_SUCCESS, GET_ORDER_REQUEST, GET_ORDER_SUCCESS, REFRESH_TOTAL,
    REMOVE_INGREDIENT,
    SET_INGREDIENT_INFO
} from "../actions/main";


const initialState = {
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

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FULLDATA_REQUEST:
            return {
                ...state,
                fullDataRequest : true
            }
        case GET_FULLDATA_SUCCESS :
            return  {
                ...state,
                allIngredients: [...state.allIngredients, ...action.payload],
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
        case REMOVE_INGREDIENT :
            return {
                ...state,
                constructorIngredients: [...state.constructorIngredients.filter((value, index) => {return index !== action.payload})]
            }    
        case ADD_BUN_TO_CONSTRUCTOR :
            return {
                ...state,
                currentBun: action.payload
            }
        case REFRESH_TOTAL:
            return {
                ...state,
                totalPrice: action.payload
            }
        case GET_ORDER_REQUEST :
            return state;
        case GET_ORDER_SUCCESS :
            return {
                ...state,
                orderDetails : action.payload,
                orderDetailsRecieved : true,
            }
        default: {
            return  state;
        }

    }
}
