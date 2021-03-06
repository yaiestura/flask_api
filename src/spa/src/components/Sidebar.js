import React, { Component } from 'react'
import './Sidebar.css'
import M from 'materialize-css'
import { NavLink } from 'react-router-dom'
import main_logo from'./logo-white-onvif.png';

class Sidebar extends Component {

  componentDidMount() {
    let elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
    let instances = document.querySelectorAll('.collapsible');
    M.Collapsible.init(instances);
  }

  render() {   
    return (
      <aside className="sidenav-main nav-collapsible sidenav-dark gradient-45deg-deep-purple-blue sidenav-gradient sidenav-active-rounded">
        <div className="brand-sidebar">
          <h1 className="logo-wrapper">
            <a className="brand-logo darken-1" href="#">
              <img src={ main_logo } alt="Materialize logo"/>
              <span className="logo-text hide-on-med-and-down">Materialize</span>     
            </a>     
          </h1>
        </div>
        <ul className="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow" id="slide-out" data-menu="menu-navigation" data-collapsible="menu-accordion">
          <li className="navigation-header">
            <a className="navigation-header-text">Dashboard</a>
          </li>
          <li className="bold">
            <a className="collapsible-header waves-effect waves-white">
              <i className="material-icons">cast</i>
              <span className="menu-title">Dashboard</span>
              <span class="badge badge pill orange float-right mr-10">3</span>              
            </a>
            <div className="collapsible-body">
              <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                <NavLink to="/discovery">
                  <li>
                    <a className="collapsible-body">
                      <i className="material-icons white-text">radio_button_unchecked</i>
                      <span>WS-Discovery</span>
                    </a>
                  </li>
                </NavLink>
                <NavLink to="/test">
                  <li>
                    <a className="collapsible-body">
                      <i className="material-icons white-text">radio_button_unchecked</i>
                      <span>Device Test</span>
                    </a>
                  </li>
                </NavLink> 
                <NavLink to="/live">
                  <li>
                    <a className="collapsible-body">
                      <i className="material-icons white-text">radio_button_unchecked</i>
                      <span>Live Video</span>
                    </a>
                  </li>
                </NavLink>               
              </ul>
            </div>
          </li>
          <li className="bold">
            <a className="waves-effect waves-cyan">
              <i className="material-icons white-text">cloud_queue</i>
              <span className="menu-title">Cloud Database</span>
            </a>
          </li>
          <li className="bold">
            <a className="waves-effect waves-cyan">
              <i className="material-icons white-text">mail_outline</i>
              <span className="menu-title">Notifications</span>
              <span className="badge badge pill purple float-right mr-10">1</span>
            </a>
          </li>
          <li className="bold">
            <a className="waves-effect waves-cyan">
              <i className="material-icons white-text">videocam</i>
              <span className="menu-title">PTZ&RTSP Tests</span>
            </a>
          </li>
          <li className="bold">
            <a className="waves-effect waves-cyan">
              <i className="material-icons white-text">settings</i>
              <span className="menu-title">Settings</span>
            </a>
          </li>
        </ul> 
        <div class="navigation-background"></div><a class="sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect waves-light hide-on-large-only" href="#" data-target="slide-out"><i class="material-icons">menu</i></a>           
      </aside>
    )
  }
}

export default Sidebar;
