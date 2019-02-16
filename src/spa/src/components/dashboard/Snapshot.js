import React, { Component } from 'react'

class Snapshot extends Component {
  
  render() {
    return(
      <div className="snapshot">        
        <img className="materialboxed" src={this.props.uri} 
        onError={ (e) => { e.target.src = "http://www.inspiredbydrive.com/wp-content/uploads/2016/12/no-image.png" }} 
        height="350px" alt="Snapshot"/>
      </div>
    )    
  }
}

export default Snapshot;