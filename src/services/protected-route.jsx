import { useAuth } from '../services/auth';
import { Route, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProtectedRoute = ({ children, ...rest }) => {


    return (
        <Route
            {...rest}
            render={() =>
                auth.user ? (
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

export default ProtectedRoute