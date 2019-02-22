import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return(        
      <nav className="navbar-main navbar-color nav-collapsible sideNav-lock navbar-dark gradient-45deg-indigo-blue navbar-gradient">  
        <div className="nav-wrapper">
        <a className="navbar-list center brand-logo"><NavLink to="/">ONVIF Compliance Tester</NavLink></a> 
          <ul className="right hide-on-med-and-down">  
            <NavLink to="/docs">
              <li className="hoverable">
                <a>Docs</a>
              </li>
            </NavLink>            
            <li className="hoverable"><a target="_blank" href="https://github.com/yaiestura">Github</a></li>             
          </ul>                           
        </div>    
      </nav>      
    )
}

export default withRouter(Navbar);