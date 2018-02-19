import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

//Routers List 			{ BrowserRouter, Route, Switch }
//import Main from './Main';
import PrivateRoute from './PrivateRoute';
import Profile from './Profile';
import Test from './Test';

export default () => (
    <BrowserRouter>
        <Switch>
            <PrivateRoute path="/*" exact Component={Test} /> } />
            <PrivateRoute path="/Profile" exact Component={Profile} /> } />
        </Switch>
    </BrowserRouter>
);