import React from 'react';
import { Route, Redirect } from 'react-router-dom';

let checkAuth = true;

const PrivateRoute = ({ Component, ...rest }) => (
    <Route {...rest} render={ props => (
        checkAuth ?
            <Component {...props} /> :
            <Redirect to='/' />
    )} />
);

export default PrivateRoute;