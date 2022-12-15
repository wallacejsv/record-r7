import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Home } from './pages/Home';

export const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    );
}