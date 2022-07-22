import React, {useCallback, useEffect} from "react";
import {useHistory} from "react-router-dom";
import ForgotForm from "../components/forms/forgot";


const ForgotPage = () => {



    const history = useHistory();

    const login = useCallback(
        () => {
            history.replace({ pathname: '/login' });
        },
        [history]
    );


    return (
        <ForgotForm login={login}/>
    )
}

export  default ForgotPage