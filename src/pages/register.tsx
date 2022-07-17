import React, {useCallback, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import RegisterForm from "../components/forms/register";
import {useSelector} from "../hooks/redux-hooks";


const RegisterPage = () => {

    const {isAuthenticated} = useSelector(state => state.user)

    const history = useHistory();

    const login = useCallback(
        () => {
            history.replace({ pathname: '/login' });
        },
        [history]
    );

    useEffect(() => {
        isAuthenticated && history.replace({ pathname: '/' });
    }, [isAuthenticated])

    return (
        <RegisterForm login={login} />
    )
}

export  default RegisterPage