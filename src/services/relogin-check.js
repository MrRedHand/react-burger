import {getUser} from "./to-server-requests";
import {reloginUserFail, reloginUserStarted, reloginUserSuccess} from "./actions/user-login";
import {store} from "./store";


export const reloginCheck = () => {

    if (localStorage.getItem('accessToken')) {

        store.dispatch(reloginUserStarted())

        getUser()
            .then(res => {
                if (res.success) {
                    const objPayload = {
                        email : res.user.email,
                        name : res.user.name,
                    }
                    store.dispatch(reloginUserSuccess(objPayload))
                } else {
                    store.dispatch(reloginUserFail())
                }
            })
            .catch((error) => {
                store.dispatch(reloginUserFail())
            });
    } else {
        store.dispatch(reloginUserFail())
    }
}