import React, { Component } from 'react'
import Preloader from './Preloader'

class Snapshot extends Component {

  handleClick() {
    this.forceUpdate()
  }
  
  render() {
    return(
      <div className="snapshot">
        { !this.props.uri ? <Preloader/> :
        <img className="snap" src={`${ this.props.uri }?${ Date.now() }`} 
        onError={ (e) => { e.target.src = "http://www.inspiredbydrive.com/wp-content/uploads/2016/12/no-image.png" }} 
        onClick={ () => { this.handleClick()}}
      height="350px" alt="Snapshot"/> }
      </div>
    )    
  }
}

export default Snapshot;