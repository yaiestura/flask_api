import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return(
        <header>
            <nav className="nav-wrapper indigo">
                <div className="container">
                    <a className="brand-logo"><NavLink to="/">ONVIF Compliance Tester</NavLink></a>
                    <a href="#" className="sidenav-trigger" data-target="mobile-menu">
                        <i class="material-icons">menu</i>
                    </a>
                    <ul class="right hide-on-med-and-down">
                        <li><NavLink to="/discoverydashboard">Dashboard</NavLink></li>
                        <li><NavLink to="/docs">Docs</NavLink></li>
                        <li><a href="https://github.com/yaiestura">Github</a></li>
                        <li><a href="#" class="tooltipped btn-floating btn-small indigo darken-4" data-position="bottom" data-tooltip="Instagram">
                            <i class="fab fa-instagram"></i>
                        </a></li>
                        <li><a href="#" class="tooltipped btn-floating btn-small indigo darken-4" data-position="bottom" data-tooltip="Facebook">
                            <i class="fab fa-facebook"></i>
                        </a></li>
                        <li><a href="#" class="tooltipped btn-floating btn-small indigo darken-4" data-position="bottom" data-tooltip="Twitter">
                            <i class="fab fa-twitter"></i>
                        </a></li>
                    </ul>
                    <ul class="sidenav grey lighten-2" id="mobile-menu">
                        <li><a href="#">Photo's</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>            
        </header>        
    )
}

export default Navbar;