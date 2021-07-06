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

const routes = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/add-nurse" component={AddNurse} />
    <Route path="/add-patient" component={AddPatient}/>
    <Route path="/edit-nurse" component={EditNurse} />
    <Route path="/edit-patient" component={EditPatient}/>
    <Route path="/patients" component={Patients} />
    <Route path="/nurses" component={Nurses} />
    <Route path="/profile" component={Profile} />
    <Route path="/home" component={Home} />
    <Redirect from="*" to="/home" />;
  </Switch>
)

export default routes
