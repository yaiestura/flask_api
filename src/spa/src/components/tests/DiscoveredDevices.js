import React, { Component } from 'react';
import Devices from './Devices'
import './DiscoveredDevices.css'

class Discovery extends Component {
    render() {
      return (
        <div className="card">                       
          <Devices/>                                       
        </div>
      );
    }
  }
  
  export default Discovery;