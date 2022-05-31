import React from "react";
import { Route, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {useSelector} from "react-redux";

export function ProtectedRoute({ children, ...rest }) {

    const {user} = useSelector(state => state.user.user)

    let userIsLoaded = false

    useEffect(() => {
        userIsLoaded = user
    }, [user]);

    return (
        <Route
            {...rest}
            render={() =>
                // Если пользователь есть, используем компонент, который передан в ProtectedRoute
                userIsLoaded ? (
                    children
                ) : (
                    // Если пользователя нет в хранилище, происходит переадресация на роут /login
                    <Redirect
                        to='/login'
                    />
                )
            }
        />
    );
}