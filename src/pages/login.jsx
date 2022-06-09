import React, {useCallback, useEffect} from "react";
import LoginForm from "../components/forms/login";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";


const LoginPage = () => {

    const {isAuthenticated} = useSelector(state => state.user)

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

    useEffect(() => {
        isAuthenticated && history.replace({ pathname: '/' });
    }, [isAuthenticated])

    return (
        <>
            <LoginForm register={register} forgot={forgotPassword}/>
        </>
    )
}

export  default  LoginPage