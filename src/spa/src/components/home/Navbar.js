import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return(
        <header>
            <nav className="navbar-main navbar-color nav-collapsible sideNav-lock gradient-45deg-indigo-light-blue gradient-shadow">  
                <div className="nav-wrapper">
                    <a className="navbar-list center brand-logo"><NavLink to="/">ONVIF Compliance Tester</NavLink></a>
                    <a href="#" className="sidenav-trigger" data-target="mobile-menu">
                        <i class="material-icons">menu</i>
                    </a>
                    <ul class="navbar-list left hide-on-med-and-down">
                        <li><NavLink to="/discovery">Dashboard</NavLink></li>
                        <li><NavLink to="/docs">Docs</NavLink></li>
                        <li><a target="_blank" href="https://github.com/yaiestura">Github</a></li>                       
                    </ul>
                    <ul class="sidenav gradient-45deg-indigo-light-blue" id="mobile-menu">
                        <li><NavLink to="/discovery">Dashboard</NavLink></li>
                        <li><NavLink to="/docs">Docs</NavLink></li>
                        <li><a target="_blank" href="https://github.com/yaiestura">Github</a></li>
                    </ul>
                </div>
            </nav>            
        </header>        
    )
}

export default Navbar;