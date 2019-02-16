import React, { Component } from 'react'
import './Sidebar.css'
import bg from './images/moon.jpg'
import user from './images/richard.png'
import M from 'materialize-css'
import { NavLink } from 'react-router-dom'

class Sidebar extends Component {

  componentDidMount() {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, 
      {
        menuWidth: 500, 
        edge: 'left', 
        inDuration: 50
      });
  }

  render() {   
    return (
      <div>
        <ul id="slide-out" className="sidenav white">
          <li>
            <div className="user-view">
              <div className="background">              
                <img className="responsive-img" src={bg} alt="beach"/>               
              </div>
              <a href="#user"><img className="circle responsive-img z-depth-5" src={user} alt="user"/></a>
              <a href="#name"><span className="white-text name">Richard Hendricks</span></a>
              <a href="#email"><span className="white-text email">hendricks@pied.piper.com</span></a>
            </div>
            </li>
            <NavLink to="/discoverydashboard"><li className="menu-item teal hoverable waves-effect waves-teal"><a href="#!"><i className="material-icons white-text">cast</i>WS-Discovery</a></li></NavLink>
            <div className="divider"></div>  
            <NavLink to="/testdashboard"><li className="menu-item teal hoverable waves-effect waves-teal"><a href="#!"><i className="material-icons white-text">layers</i>Device Test</a></li></NavLink>
            <div className="divider"></div>  
            <li className="menu-item teal hoverable waves-effect waves-teal"><a><i className="material-icons white-text">cloud_queue</i>Cloud Database</a></li>
            <div className="divider"></div>  
            <li className="menu-item teal hoverable waves-effect waves-teal"><a><i className="material-icons white-text">mail_outline</i>Notifications</a></li>
            <div className="divider"></div>  
            <li className="menu-item teal hoverable waves-effect waves-teal"><a><i className="material-icons white-text">videocam</i>PTZ&RTSP Tests</a></li>
            <div className="divider"></div>  
            <li className="menu-item teal hoverable waves-effect waves-teal"><a><i className="material-icons white-text">settings</i>Settings</a></li>
            <div className="divider"></div>           
            <div className="center-align">  
              <a className="btn-floating pulse sidenav-close"><i className="material-icons">close</i></a> 
            </div>             
        </ul>

        <div className="w3-sidebar teal w3-bar-block w3-xxlarge" style={{width:'64px'}}> 
        <a href="#" data-target="slide-out" className="w3-bar-item w3-button waves-effect waves-teal sidenav-trigger" ><i className="material-icons white-text">menu</i></a>
        <div className="line-separator"></div>
        <NavLink to="/discoverydashboard"><a data-target="slide-out" className="w3-bar-item w3-button waves-effect waves-teal"><i className="material-icons white-text">cast</i></a></NavLink>
        <div className="line-separator"></div>
        <NavLink to="/testdashboard"><a data-target="slide-out" className="w3-bar-item w3-button waves-effect waves-teal"><i className="material-icons white-text">layers</i></a></NavLink>
        <div className="line-separator"></div>
        <a data-target="slide-out" className="w3-bar-item w3-button waves-effect waves-teal"><i className="material-icons white-text">cloud_queue</i></a>
        <div className="line-separator"></div>
        <a data-target="slide-out" className="w3-bar-item w3-button waves-effect waves-teal"><i className="material-icons white-text">mail_outline</i></a>
        <div className="line-separator"></div>
        <a data-target="slide-out" className="w3-bar-item w3-button waves-effect waves-teal"><i className="material-icons white-text">videocam</i></a>
        <div className="line-separator"></div>
        <a data-target="slide-out" className="w3-bar-item w3-button waves-effect waves-teal"><i className="material-icons white-text">settings</i></a>        
        </div>
      </div>
    )
  }
}

export default Sidebar;
