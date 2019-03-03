import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return(        
      <nav className="navbar-main navbar-color nav-collapsible sideNav-lock navbar-dark gradient-45deg-deep-purple-blue navbar-gradient">  
        <div className="nav-wrapper">
        <a className="navbar-list center brand-logo"><NavLink to="/">ONVIF Compliance Tester</NavLink></a>                              
        </div>    
      </nav>      
    )
}

export default withRouter(Navbar);