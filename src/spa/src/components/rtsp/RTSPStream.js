import React, { Component } from 'react';
import Preloader from '../dashboard/Preloader'
import './RTSPStream.css'

class RTSPStream extends Component {

    render() {
      return (
        <div className="card">  
          <h1>Media RTSP Player</h1> 
          <Preloader/>                    
        </div>
      );
    }
}

export default RTSPStream;