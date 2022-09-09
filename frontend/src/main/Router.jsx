import React from "react"
import { Switch, Route, Redirect } from "react-router"

import Home from "../components/home/Home"
import ChartTest from "../components/users/ChartTest"
import User from '../components/users/User'

export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={User} />
        <Route path='/charts' component={ChartTest} />
        <Redirect from='*' to='/' />
    </Switch>