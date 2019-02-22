import React, { Component } from 'react';
import Devices from '../../components/Devices'
import './Discovery.css'

class Discovery extends Component {
    render() {
      return (
        <div className="card">  
          <h5 className="label">Discovered devices:</h5>                         
          <Devices className="card-content"/>                                       
        </div>
      );
    }
  }
  
  export default Discovery;