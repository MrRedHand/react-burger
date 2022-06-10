import React from "react";
import {Route, Redirect, useLocation} from 'react-router-dom';
import {useSelector} from "react-redux";

export function ProtectedRoute({ onlyUnAuth = false, ...rest }) {

    const location = useLocation()

    const {isAuthenticated} = useSelector(state => state.user)

    if (onlyUnAuth && isAuthenticated) {
        const from = location.state || {from : {pathname : '/'}}
        return <Redirect to={from}/>
    }

    if (onlyUnAuth && !isAuthenticated) {
        return (<Redirect to={{pathname: '/login', state : {from : location}}}/>)
    }

    return (
        <Route {...rest}/>
    );
}