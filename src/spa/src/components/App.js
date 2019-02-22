import React, { Component } from 'react';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Dashboard from './dashboard/Dashboard';
import TestDashboard from './tests/TestDashboard'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'

class App extends Component {
  
  render() {
    return (      
      <BrowserRouter>
        <div className="App">      
          <div className="navbar navbar-fixed">            
            <Navbar />
          </div>
          <div className="row dashboard"> 
            <Sidebar/>
            <div className="col l10 dashboard offset-l2">
              <Switch>   
                <Route path='/discoverydashboard'component={Dashboard} />
                <Route path='/testdashboard' component={TestDashboard} />            
              </Switch>
            </div>   
          </div>
        </div>
      </BrowserRouter>      
    );
  }
}

export default App;
