import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import RescuePassword from './pages/RescuePassword';

export default function Routes() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Login}/>
                    <Route path="/esqueci-senha" component={RescuePassword}/>
                </Switch>
            </BrowserRouter>

        )
}