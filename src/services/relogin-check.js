import {getUser} from "./to-server-requests";
import {reloginUserFail, reloginUserStarted, reloginUserSuccess} from "./actions/user-login";
import {store} from "./store";


export const reloginCheck = () => {

    console.log('проверка релогина')

    let success = false

    if (localStorage.getItem('accessToken')) {

        store.dispatch(reloginUserStarted())

        getUser()
            .then(res => {
                if (res.success) {
                    console.log(res)
                    const objPayload = {
                        email : res.user.email,
                        name : res.user.name,
                    }
                    success = true
                    store.dispatch(reloginUserSuccess(objPayload))
                }
            })
            .catch((error) => {
                store.dispatch(reloginUserFail())
                console.log('userReloginError ', error)
            });
    }

    return success
}