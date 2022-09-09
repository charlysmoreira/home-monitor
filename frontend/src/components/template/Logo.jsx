import "./Logo.css"
import React from "react"
import logo from '../../asserts/logo.png'
import { Link } from "react-router-dom"

export default props => 
    <aside className="logo">
        <Link to="/" className="href logo">
            <img src={logo} alt="logo"/>
        </Link>
    </aside>