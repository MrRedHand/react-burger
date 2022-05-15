import {apiUrl} from "../../utils/apiUrl";
import checkResponse from "../../utils/checkResponse";
import PropTypes from "prop-types";
import {getOrderFailed, getOrderRequest, getOrderSuccess} from "./get-order";
import {clearConstructor} from "./clear-constructor";

export  const fetchOrder = (ingredientsArr) => {
    return function (dispatch) {

        console.log(ingredientsArr)

        dispatch(getOrderRequest())

        fetch(apiUrl + 'orders/', {
            headers: {
                'Content-Type' : 'application/json'},
                method: 'POST',
                body: JSON.stringify({ingredients : ingredientsArr})
            })
            .then(checkResponse)
            .then((data) => {
                dispatch(getOrderSuccess(data))
                dispatch(clearConstructor())
            })
            .catch((error) => {
                dispatch(getOrderFailed())
                console.log(error)
            });
    }
}

fetchOrder.propTypes = {
    ingredientsArr : PropTypes.array.isRequired
}