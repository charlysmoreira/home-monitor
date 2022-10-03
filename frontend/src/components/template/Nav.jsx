import "./Nav.css"
import React from 'react'
import { Link } from 'react-router-dom'

export default props => 
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <i className="fa fa-line-chart"></i> Início
            </Link>
            <Link to="/historics" className="href">
                <i className="fa fa-history"></i> Histórico
            </Link>
            <Link to="/suppliers" className="href">
                <i className="fa fa-users"></i> Fornecedor
            </Link>
        </nav>
    </aside>