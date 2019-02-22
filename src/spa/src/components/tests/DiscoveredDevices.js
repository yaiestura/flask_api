import React, { Component } from 'react';
import Devices from './Devices'
import './DiscoveredDevices.css'

class Discovery extends Component {
    render() {
      return (
        <div className="card">  
          <h5 className="label">Yet Discovered devices:</h5>                     
          <Devices/>                                       
        </div>
      );
    }
  }
  
  export default Discovery;