import React, { Component } from 'react'
import {fetchFunction} from '../../store/actions/fetchFunction'
import { connect } from 'react-redux'
import {showRequest, fetchRequest} from '../../store/actions/fetchFunction'
import { API_URL } from '../../config/appConfig'
import { writeCSV } from '../../store/actions/writeToCSV'
import './Report.css'

class Report extends Component {
  state = {
    response: []   
  }

  handleBack() {
    this.props.dispatch(showRequest());
  }

  runSingleTest(functionName) {
    fetch(API_URL + '/api/core_test/' + functionName + `?port=${this.props.activeCam.port}&ip=${this.props.activeCam.ip}`, {
      'headers': {
          'Access-Control-Allow-Origin':'*'
      }
    })
      .then(response => response.json())
      .then((data) => {        
        let newResponse = this.state.response;
        newResponse.push(data.response);
        this.setState({ response: newResponse });
        if(!data.response) {
          console.log(functionName);
        }            
        })      
  }

  handleStart() {
    this.props.core_tests.forEach(element => {
      this.runSingleTest(element.name);      
    });
    this.props.dispatch(writeCSV(this.props.activeCam));
  }
      
  render() {
    const { core_tests, activeCam } = this.props;
    console.log(core_tests);    
  let resultData = this.state.response.map(item => (
    <p>{item}</p>
  ))
  return (
    <div className="report teal white-text">
      <h5>Testing Report:</h5> 
      <a className="btn start white-text" onClick={() => {this.handleStart()}}>Start</a>
      <p>Test Time: {new Date().toJSON()}</p>
      <p>Device IP: {activeCam!==null ? activeCam.ip : null}</p>
      <p>Device Port: {activeCam!==null ? activeCam.port : null}</p>
      {resultData}   
      <a className="btn proceed white-text" onClick={() => {this.handleBack()}}>Back</a>
    </div>
  )
  }
}

const mapStateToProps = state => ({    
  core_tests: state.coreTest.core_tests,  
  activeCam: state.report.activeCam
})

export default connect(mapStateToProps)(Report);
