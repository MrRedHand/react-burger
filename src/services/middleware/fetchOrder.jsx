import {apiUrl} from "../../utils/apiUrl";
import checkResponse from "../../utils/checkResponse";
import {GET_ORDER_FAILED, GET_ORDER_REQUEST, GET_ORDER_SUCCESS} from "../actions/main";
import PropTypes from "prop-types";

export  const fetchOrder = (ingredientsArr) => {
    return function (dispatch) {

        console.log(ingredientsArr)

        dispatch({type : GET_ORDER_REQUEST})

        fetch(apiUrl + 'orders/', {
            headers: {
                'Content-Type' : 'application/json'},
                method: 'POST',
                body: JSON.stringify({ingredients : ingredientsArr})
            })
            .then(checkResponse)
            .then((data) => {
                dispatch({type : GET_ORDER_SUCCESS, payload : data})
                console.log('got order', data)
            })
            .catch((error) => {
                dispatch({type : GET_ORDER_FAILED})
                console.log(error)
            });
    }
}

fetchOrder.propTypes = {
    ingredientsArr : PropTypes.array.isRequired
}