import React, { Component } from 'react'
import DiscoveredDevices from './DiscoveredDevices'
import ChooseTest from "../tests/ChooseTest";
import Preloader from './Preloader'
import { connect } from 'react-redux'
import { fetchTest } from '../../store/actions/fetchTestList'
import fetchFunction from '../../store/actions/fetchFunction'
import './TestDashboard.css'
import Report from '../tests/Report'

class TestDashboard extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTest('core'));    
  }
  render() {
    const { core_tests, showComponents } = this.props;
    console.log(core_tests);
    return (
      <div className="row">
        <div className="col s4 discovery">
              <DiscoveredDevices/>              
            </div>
            <div className="col s8 choosetest">
              {showComponents===true ? <ChooseTest coreTests={core_tests}/> : <Report/>}                           
            </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({    
  core_tests: state.coreTest.core_tests,
  showComponents: state.report.showDashboardComponents
})

export default connect(mapStateToProps)(TestDashboard);
