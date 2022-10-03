import React from "react"
import { Switch, Route, Redirect } from "react-router"

import Home from "../components/home/Home"
import Historic from "../components/pages/Historic"
import Supplier from '../components/pages/Supplier'

export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/suppliers' component={Supplier} />
        <Route path='/historics' component={Historic} />
        <Redirect from='*' to='/' />
    </Switch>