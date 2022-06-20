import React, {useCallback, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import RegisterForm from "../components/forms/register";
import {useSelector} from "react-redux";


const RegisterPage = () => {

    const {isAuthenticated} = useSelector<any>(state => state.user) as  any

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