import React, {useCallback, useEffect} from "react";
import {useHistory} from "react-router-dom";
import ResetForm from "../components/forms/reset";
import {useSelector} from "../hooks/redux-hooks";


const ResetPage = () => {

    const {requestedForgotPassword} = useSelector(state => state.user)

    const history = useHistory();

    const login = useCallback(
        () => {
            history.replace({ pathname: '/login' });
        },
        [history]
    );


    useEffect(() => {
        !requestedForgotPassword && history.push('/login');
    }, [requestedForgotPassword])

    return (
        <ResetForm login={login}/>
    )
}

export  default ResetPage