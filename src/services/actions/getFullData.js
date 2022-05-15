import {apiUrl} from "../../utils/apiUrl";
import checkResponse from "../../utils/checkResponse";
import {getDataFailed, getDataSuccess} from "./get-data";


export  const  getFullData = () => {
    return function (dispatch) {
        dispatch(getDataFailed())

        fetch(apiUrl + 'ingredients/')
            .then(checkResponse)
            .then((data) => {
                dispatch(getDataSuccess(data.data))
                console.log('got data', data.data)
            })
            .catch((error) => {
                dispatch(getDataFailed())
                console.log(error)
            });
    }
}
