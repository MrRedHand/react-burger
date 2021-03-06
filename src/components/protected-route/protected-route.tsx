import React from "react";
import {Route, Redirect, useLocation} from 'react-router-dom';
import {useSelector} from "../../hooks/redux-hooks";

export function ProtectedRoute({ onlyAuth = false, ...rest }) {

    const location = useLocation()

    const {isAuthenticated} = useSelector(state => state.user)

    if (onlyAuth && isAuthenticated) {
        console.log('редирект на запрошенный маршрут')
        return <Route {...rest}/>
    }

    if (onlyAuth && !isAuthenticated) {
        console.log('редирект на логин (юзер не залогинен)')
        console.log('была попытка посетить страницу ', location)
        return (<Redirect to={{pathname: '/login', state : {from : location}}}/>)
    }

    return <Route {...rest}/>
}