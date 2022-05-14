import {apiUrl} from "../../utils/apiUrl";
import checkResponse from "../../utils/checkResponse";
import {GET_ORDER_FAILED, GET_ORDER_REQUEST, GET_ORDER_SUCCESS} from "./main";
import PropTypes from "prop-types";
import {store} from "../store";
import {getOrderFailed, getOrderRequest, getOrderSuccess} from "./get-order";
import {clearConstructor} from "./clear-constructor";

export  const fetchOrder = (ingredientsArr) => {
    return function (dispatch) {

        console.log(ingredientsArr)

        store.dispatch(getOrderRequest)

        fetch(apiUrl + 'orders/', {
            headers: {
                'Content-Type' : 'application/json'},
                method: 'POST',
                body: JSON.stringify({ingredients : ingredientsArr})
            })
            .then(checkResponse)
            .then((data) => {
                store.dispatch(getOrderSuccess(data))
                store.dispatch(clearConstructor())
            })
            .catch((error) => {
                store.dispatch(getOrderFailed)
                console.log(error)
            });
    }
}

fetchOrder.propTypes = {
    ingredientsArr : PropTypes.array.isRequired
}