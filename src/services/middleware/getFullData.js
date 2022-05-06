import {apiUrl} from "../../utils/apiUrl";
import checkResponse from "../../utils/checkResponse";
import {GET_FULLDATA_REQUEST, GET_FULLDATA_FAILED, GET_FULLDATA_SUCCESS} from "../actions/main";


export  const  getFullData = () => {
    return function (dispatch) {
        dispatch({type: 'GET_FULLDATA_REQUEST'})

        fetch(apiUrl + 'ingredients/')
            .then(checkResponse)
            .then((data) => {
                dispatch({type : GET_FULLDATA_SUCCESS, payload : data.data})
                console.log('got data', data.data)
            })
            .catch((error) => {
                dispatch({type : 'GET_FULLDATA_FAILED'})
                console.log(error)
            });
    }
}
