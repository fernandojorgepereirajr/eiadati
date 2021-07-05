import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from '../Pages/Login'
import AddNurses from '../Pages/AddNurses'
import AddPatients from '../Pages/AddPatients'
import Patients from '../Pages/Patients'
import Nurses from '../Pages/Nurses'
import Home from '../Pages/Home'

const routes = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/add-nurses" component={AddNurses} />
    <Route path="/add-patiens" component={AddPatients} />
    <Route path="/patients" component={Patients} />
    <Route path="/nurses" component={Nurses} />
    <Route path="/home" component={Home} />
    <Redirect from="*" to="/home" />;
  </Switch>
)

export default routes
