import React, { Component } from 'react';
import Devices from '../../components/Devices'
import './Discovery.css'

class Discovery extends Component {
    render() {
      return (
        <div className="discovery teal">
          <h5 className="white-text label">Discovered devices</h5>                
          <Devices/>                                       
        </div>
      );
    }
  }
  
  export default Discovery;