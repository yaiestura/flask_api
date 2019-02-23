import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../store/actions/deviceInfo'
import Preloader from './dashboard/Preloader'
import './Devices.css'

class Devices extends Component {    
    state = {
        selected: null
    }

    handleClick(device) {
        this.props.dispatch(fetchData(device));
        this.setState({selected: device})
        console.log(device); 
        console.log(this.props);       
    }
    
    render() {        
        const { devices, isFetching, error } = this.props;
        const deviceItems = devices && devices.map((device) =>            
            <div className="collection hoverable" key={ device.id }>             
                <a className={`${this.state.selected == device ?'white deep-purple-text text-accent-4':'gradient-45deg-deep-purple-blue white-text'} collection-item hoverable z-depth-3`}
                onClick={() => this.handleClick(device)}>
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
