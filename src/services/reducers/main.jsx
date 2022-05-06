import {
    CLEAR_INGREDIENT_INFO,
    GET_FULLDATA_FAILED,
    GET_FULLDATA_REQUEST,
    GET_FULLDATA_SUCCESS,
    SET_INGREDIENT_INFO
} from "../actions/main";


const initialState = {
    allIngredients : [],
    constructorIngredients: [],
    viewIngredient: {},
    orderDetails: {},
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

        default: {
            return  state;
        }

    }
}
