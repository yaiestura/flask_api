import React, { Component } from 'react'
import Discovery from './Disvovery'
import AboutDevice from './AboutDevice'
import ChooseTest from "../tests/ChooseTest";
import Preloader from './Preloader'
import { connect } from 'react-redux'
import { fetchTest } from '../../store/actions/fetchTestList'
import fetchFunction from '../../store/actions/fetchFunction'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './Dashboard.css'
import Report from '../tests/Report'

class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTest('core'));    
  }
  render() {
    const { core_tests } = this.props;
    console.log(core_tests);
    return (
      <div className="row">
        <div className="col l4 m4 s12">
              <Discovery/>              
            </div>
            <div className="col l8 m8 s12">
              <AboutDevice/>                         
            </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({    
  core_tests: state.coreTest.core_tests  
})

export default connect(mapStateToProps)(Dashboard);
