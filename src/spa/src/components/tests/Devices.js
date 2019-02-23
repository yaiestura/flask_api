import React, { Component } from 'react'
import { connect } from 'react-redux'
import {makeActiveCam} from '../../store/actions/fetchFunction'
import './Devices.css'

class Devices extends Component {    
    state = {
        selected: null
    }

    handleClick(device) {
        this.props.dispatch(makeActiveCam(device));
        this.setState({selected: device})
        console.log(device); 
        console.log(this.props);       
    }
    
    render() {        
        const { devices, error } = this.props;
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
        return (
            <div className="devices">                                                         
                { deviceItems }             
            </div>            
        )
    }    
}

const mapStateToProps = state => ({
    devices: state.discovery.devices,    
  });
  
export default connect(mapStateToProps)(Devices);
