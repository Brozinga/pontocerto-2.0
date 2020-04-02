import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import RescuePassword from './pages/RescuePassword';
import Timesheet from './pages/Timesheet';
import Dashboard from './pages/Dashboard';

export default function Routes() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Login}/>
                    <Route path="/esqueci-senha" component={RescuePassword}/>
                    <Route path="/timesheet" component={Timesheet}/>
                    <Route path="/dashboard" component={Dashboard}/>
                </Switch>
            </BrowserRouter>

        )
}