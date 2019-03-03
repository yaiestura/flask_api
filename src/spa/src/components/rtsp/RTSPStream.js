import React, { Component } from 'react';
import Preloader from '../dashboard/Preloader'
import './RTSPStream.css'
import { connect }from 'react-redux'

class RTSPStream extends Component {

    render() {
      const { deviceData } = this.props;
      return (
        <div className="card">  
          <h1>Media RTSP OpenCV Test(42 Cam)</h1> 
          <img src="http://onvif.auditory.ru/api/livestream"/>      
          <h5>{deviceData.StreamUri}</h5>     
        </div>
      );
    }
}

const mapStateToProps = state => ({
  deviceData: state.deviceInfo.deviceData
});

export default connect(mapStateToProps)(RTSPStream);