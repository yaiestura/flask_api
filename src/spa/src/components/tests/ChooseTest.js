import React, { Component } from 'react'
import M from 'materialize-css'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './ChooseTest.css'
import hse from './images/hse.png'
import core from './images/core.png'
import SimpleTable from './Table'
import {hideRequest} from '../../store/actions/fetchFunction'

class ChooseTest extends Component {

    constructor(props) {
        super(props);
        this.state = { value: 'core' };
        this.handleChange = this.handleChange.bind(this);        
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
        console.log('Active is', e.target.value)
    }

    handleProceed() {
        this.props.dispatch(hideRequest());
    }

    componentDidMount() {
        var modals = document.querySelectorAll('.modal');
        M.Modal.init(modals);
        var selects = document.querySelectorAll('select');
        M.FormSelect.init(selects);
    }

    render() {
        const { coreTests } = this.props;
        console.log(coreTests);
          return (
            <div className="card">
                <h5 className="label">ONVIF Device Test</h5>
                <div className="row choose">
                    <div className="input-field col s5 offset-s1 container center-align">
                        <select className="icons" value={this.state.value} onChange={this.handleChange}>
                            <option value="" disabled selected>Choose your option</option>
                            <option value="core" data-icon={core}>Core Service Test</option>
                            <option value="imaging" data-icon={hse}>Imaging Service Test</option>
                        </select>
                        <label className="lblch">Choose ONVIF Compliance Test</label>
                    </div>
                    <div className="col s2 btninfo container">
                        <a class="btn modal-trigger gradient-45deg-indigo-blue" href="#testinfo">Test Info</a> 
                          <div id="modal1" class="modal">
                              <div class="modal-content">
                                  <h4>Device Core Service Conformance Test</h4>
                                  <p>
                                    The scope of this specification is to cover interfaces with regard to following subcategories of device service.
                                    The set of ONVIF test specification describes  the  test  cases  need  to  verify  the  [ONVIF  Network  Interface  Specs]  and  [ONVIF
                                    Conformance] requirements.
                                  </p>
                                  <p><a href="https://www.onvif.org/wp-content/uploads/2019/01/ONVIF_Base_Device_Test_Specification_18.12.pdf"></a></p>
                              </div>
                              <div class="modal-footer">
                                  <a class="modal-close waves-effect gradient-45deg-indigo-blue btn">Agree</a>
                              </div>
                          </div>
                    </div>
                    <div className="col s3 prevtests container">
                        <span className="btn gradient-45deg-indigo-blue">Previous Tests</span>
                    </div>
                </div>
                <div className="row table">  
                    { this.state.value === 'core'? <SimpleTable className="coretable" coreTests={coreTests}/> : <SimpleTable className="coretable"/> }
               </div>
                <div className="row summary">
                <div className="col s6">
                    { this.state.value === 'core'? <h6 className="lblcount">{coreTests.length} Functions Checked</h6> : <h6 className="white-text lblcount">Nothing Checked</h6> }
                </div>
                <div className="col s6">
                    <h6 className="lbltime">Estimated time to test: minutes</h6>
                    <a className="btn gradient-45deg-indigo-light-blue  proceed white-text" onClick={() => {this.handleProceed()}}>Proceed</a>
                </div>
                </div>
            </div>
    )
  }
}

const mapStateToProps = (state) => {

}

export default connect(mapStateToProps)(ChooseTest);
