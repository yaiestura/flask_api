import React from 'react';
import mainLogo from'./logo-white-onvif.png';
import './Navbar.css'

const Navbar = () => {
    return(        
        <nav className="nav-wrapper valign-wrapper indigo">
          <div className="container valign-wrapper left">          
            <a className="brand-logo valign-wrapper left">ONVIF Compliance tester</a>
          </div>  
          <div className="container valign-wrapper center">        
            <a className="brand-logo valign-wrapper center"><img className="valign-wrapper logo" src={mainLogo} alt="ONVIF"/>
          </a>
          </div>
          <div className="container valign-wrapper right">  
            <ul className="container routes center-align">
            <li className="hoverable"><a href="#">Home</a></li> 
              <li className="hoverable"><a href="#">Docs</a></li> 
              <li className="hoverable"><a href="https://github.com/yaiestura">Github</a></li>             
            </ul>            
          </div>          
        </nav>        
    )
}

export default Navbar;