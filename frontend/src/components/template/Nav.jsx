import "./Nav.css"
import React from 'react'
import { Link } from 'react-router-dom'

export default props => 
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar em outro componente! */}
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/users" className="href">
                <i className="fa fa-users"></i> Fornecedor
            </Link>
            <Link to="/charts" className="href">
                <i className="fa fa-users"></i> Gráficos
            </Link>
        </nav>
    </aside>