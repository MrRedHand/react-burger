import React, {useCallback} from "react";
import {useHistory} from "react-router-dom";


const WrongPage = () => {

    const history = useHistory();

    const goToMain = useCallback(
        () => {
            history.replace({ pathname: '/' });
        },
        [history]
    );

    return (
        <>
            <p>ой-ёй, похоже тут ничего нет. Но можно вернуться на <span style={{textDecoration: "underline"}} onClick={() => goToMain()}>главную</span></p>
        </>
    )
}

export  default WrongPage