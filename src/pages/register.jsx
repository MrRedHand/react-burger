import React, {useCallback} from "react";
import {useHistory} from "react-router-dom";
import RegisterForm from "../components/forms/register";


const RegisterPage = () => {

    const history = useHistory();

    const login = useCallback(
        () => {
            history.replace({ pathname: '/login' });
        },
        [history]
    );

    return (
        <>
            <RegisterForm login={login}/>
        </>
    )
}

export  default RegisterPage