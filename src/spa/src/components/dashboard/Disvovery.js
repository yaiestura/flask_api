import React, { Component } from 'react';
import Devices from '../../components/Devices'
import { fetchDevices } from '../../store/actions/fetchDevice'
import { connect } from 'react-redux'
import Preloader from './Preloader'
import './Discovery.css'

class Discovery extends Component {

    componentDidMount() {
      this.props.dispatch(fetchDevices());
      console.log(this.props);
    }

    handleClick() {
      this.props.dispatch(fetchDevices());
      console.log(this.props);
    }

    render() {
      const { isFetching, isFetched } = this.props;

      if (!isFetching && !isFetched) {
        return null;
      }

      if (isFetching && !isFetched) {
        return <Preloader className="preloader center-align"/>;
      }

      return (
        <div className="card">  
          <div className="row">
            <div className="col l10 m10 s10">
              <h5 className="label left">Discovered devices:</h5> 
            </div>
            <div className="col l2 m2 s2">
              <a class="btn-floating gradient-45deg-deep-purple-blue white-text waves-effect waves-light"
              onClick = { () => this.handleClick() }>
                <i class="material-icons">autorenew</i>
              </a>  
            </div>
          </div>  
          <div className="row"> 
            <div className="col l12 m12 s12">                          
              <Devices className="card-content"/> 
            </div>
          </div>                                       
        </div>
      );
    }
  }
  

  const mapStateToProps = state => ({
    isFetching: state.discovery.isFetching,
    isFetched: state.discovery.isFetched    
  });
  
export default connect(mapStateToProps)(Discovery);
