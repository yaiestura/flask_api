import React, { Component } from 'react';
import Devices from './Devices'
import './DiscoveredDevices.css'

class Discovery extends Component {
    render() {
      return (
        <div className="discovery teal">
          <h5 className="white-text label">Yet Discovered Devices</h5>                
          <Devices/>                                       
        </div>
      );
    }
  }
  
  export default Discovery;