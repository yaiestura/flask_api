import React, { Component } from 'react';
import Devices from '../../components/Devices'
import './Discovery.css'

class Discovery extends Component {
    render() {
      return (
        <div className="card">                          
          <Devices className="card-content"/>                                       
        </div>
      );
    }
  }
  
  export default Discovery;