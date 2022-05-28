import React, {useCallback} from "react";
import {useHistory} from "react-router-dom";
import ResetForm from "../components/forms/reset";


const ResetPage = () => {

    const history = useHistory();

    const login = useCallback(
        () => {
            history.replace({ pathname: '/login' });
        },
        [history]
    );

    return (
        <>
            <ResetForm login={login}/>
        </>
    )
}

export  default ResetPage