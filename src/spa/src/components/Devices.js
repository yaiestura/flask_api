import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDevices } from '../store/actions/fetchDevice'
import { fetchData } from '../store/actions/deviceInfo'
import Preloader from './dashboard/Preloader'
import './Devices.css'

class Devices extends Component {    

    componentDidMount() {
        this.props.dispatch(fetchDevices());
        console.log(this.props);
    }

    handleClick(device) {
        this.props.dispatch(fetchData(device));
        console.log(device); 
        console.log(this.props);       
    }
    
    render() {        
        const { devices, isFetching, error } = this.props;
        const deviceItems = devices && devices.map((device) =>            
            <div className="collection hoverable" key={ device.id }>             
                <a className="collection-item white teal-text hoverable z-depth-3" onClick={() => this.handleClick(device)}>
                <p>IP: { device.ip }</p>
                <p>Port: { device.port }</p>
                </a>               
            </div>                    
        );
        if (error) {
            return <div>Error! {error.message}</div>;
        } 
        if (devices === []) {
            return <div>No devices were found, please resolve VPN connection</div>;
        }           
        if (isFetching) {
            return <Preloader className="preloader center-align"/>;
        }
        return (
            <div className="devices">                                              
                { deviceItems }             
            </div>            
        )
    }    
}

const mapStateToProps = state => ({
    devices: state.discovery.devices,
    isFetching: state.discovery.isFetching,
    error: state.discovery.error,
    active: state.deviceInfo.active,
    deviceData: state.deviceInfo.deviceData    
  });
  
export default connect(mapStateToProps)(Devices);
