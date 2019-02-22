import React, { Component } from 'react';
import DeviceInfo from './DeviceInfo'

class AboutDevice extends Component {
    render() {
      return (
        <div className="card">      
              <DeviceInfo className="card-content"/>                              
        </div>
      );
    }
  }

export default AboutDevice;