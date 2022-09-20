import React from "react"
import { Switch, Route, Redirect } from "react-router"

import Home from "../components/home/Home"
import ChartTest from "../components/users/ChartTest"
import MessageConfig from '../components/users/MessageConfig'

export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={MessageConfig} />
        <Route path='/charts' component={ChartTest} />
        <Redirect from='*' to='/' />
    </Switch>