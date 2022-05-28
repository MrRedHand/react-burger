import React, {useCallback} from "react";
import LoginForm from "../components/forms/login";
import {useHistory} from "react-router-dom";


const LoginPage = () => {

    const history = useHistory();

    const register = useCallback(
        () => {
            history.replace({ pathname: '/register' });
        },
        [history]
    );

    const forgotPassword = useCallback(
        () => {
            history.replace({ pathname: '/forgot-password' });
        },
        [history]
    );

    return (
        <>
            <LoginForm register={register} forgot={forgotPassword}/>
        </>
    )
}

export  default  LoginPage