import React, { Component } from 'react'
import './DeviceInfo.css'
import Snapshot from './Snapshot'
import { connect } from 'react-redux'

class DeviceInfo extends Component {
    render() {
        const { deviceData } = this.props;
        return (
            <div className="deviceinfo">
                <h5 className="white-text label">Device Information</h5>
                <div className="container centernp">
                    <Snapshot uri={this.props.deviceData.Uri}/>
                </div>
                <div className="row"> 
                    <div className="col s7 information">
                        <ul className="collection">
                            <li className="collection-item">Manufacturer: {deviceData.Manufacturer}</li>
                            <li className="collection-item">Model: {deviceData.Model}</li>
                            <li className="collection-item">FirmwareVersion: {deviceData.FirmwareVersion}</li>
                            <li className="collection-item">SerialNumber: {deviceData.SerialNumber}</li>
                            <li className="collection-item">HardwareID: {deviceData.HardwareId}</li>
                        </ul>
                    </div> 
                    <div className="col s5 actions">
                        <div className="row center-align"> 
                            <button className="btn center-align">Add to group</button>
                        </div>
                        <div className="row center-align"> 
                            <div className="col s6 center-align">
                                <button className="btn center-align">Edit Device</button>
                            </div>
                            <div className="col s6 center-align">
                                <button className="btn center-align">About Device</button>
                            </div>
                        </div>
                    </div>     
                </div>              
            </div>
        )
    }
}

const mapStateToProps = state => ({
    active: state.deviceInfo.active,
    deviceData: state.deviceInfo.deviceData
  });

export default connect(mapStateToProps)(DeviceInfo);
