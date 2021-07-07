import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from '../Pages/Login'
import Patients from '../Pages/Patients'
import Nurses from '../Pages/Nurses'
import AddNurse from '../Pages/AddNurse'
import AddPatient from '../Pages/AddPatient'
import EditNurse from '../Pages/EditNurse'
import EditPatient from '../Pages/EditPatient'
import Home from '../Pages/Home'
import Profile from '../Pages/Profile'

const auth = localStorage.getItem("isauth")
const routes = () => auth ? (
  <Switch>
    <Route exact={true} path="/login" component={Login} />
    <Route exact={true} path="/add-nurse" component={AddNurse} />
    <Route exact={true} path="/add-patient" component={AddPatient} />
    <Route exact={true} path="/edit-nurse" component={EditNurse} />
    <Route exact={true} path="/edit-patient" component={EditPatient} />
    <Route exact={true} path="/patients" component={Patients} />
    <Route exact={true} path="/nurses" component={Nurses} />
    <Route exact={true} path="/profile" component={Profile} />
    <Route exact={true} path="/home" component={Home} />
    <Redirect from="*" to="/home" />;
  </Switch>
) : (
  <Switch>
  <Route exact={true} path="/login" component={Login} />
  <Redirect from="*" to="/login" />;
</Switch>
)

export default routes
