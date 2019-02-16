import React, { Component } from 'react'

class Carousel extends Component {
  render() {
    const { devices, isFetching, error } = this.props;
    const deviceItems = devices && devices.map((device) =>
        <div className="collection hoverable" key={device.id}>
              <a className="collection-item white teal-text hoverable z-depth-3" onClick={() => this.handleClick(device)}>
                  <p>IP: {device.ip}</p>
                  <p>Port: {device.port}</p>
              </a>
    </div>)        
    return (      
            <div class="carousel">
                <div class="carousel-item">
                    <div class="card sticky-action">
                        <div class="card-image ">
                            <img src="https://images.pexels.com/photos/160933/girl-rabbit-friendship-love-160933.jpeg?h=350&auto=compress&cs=tinysrgb"
                            > </img>
                            <span class="card-title">Card Title</span>
                            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons md1"  ></i></a>
                        </div>
                        <div class="card-content">
                            <p>I am a very simple card.</p>
                        </div>                       
                    </div>
                </div>
                   
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
  
export default connect(mapStateToProps)(Carousel);
