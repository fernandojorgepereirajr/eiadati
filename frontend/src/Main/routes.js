import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

const auth = localStorage.getItem('isAuthenticated')

const routes = () =>
    auth === 'true' ? (
        <Switch>
            <Route path="/restaurant-home" component={RestaurantHome} />
            <Redirect from="*" to="/restaurant-home" />;
        </Switch>
    ) : (
        <Switch>
            <Route exact={true} path="/" component={Home} />
            <Redirect from="*" to="/login" />;
        </Switch>
    )

export default routes
