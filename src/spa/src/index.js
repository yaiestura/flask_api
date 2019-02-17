import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
import TestDashboard from './components/tests/TestDashboard'
import Home from './components/home/Home'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
//import fsConfig from './config/fsConfig'

export const store = createStore(rootReducer,
    compose(
      applyMiddleware(thunk.withExtraArgument({
        // getFirebase, 
        // getFirestore, 
        logger
      })),
      // reactReduxFirebase(fsConfig), // Redux binding for firebase
      // reduxFirestore(fsConfig) // Redux bindings for firestore
    )
  );

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/discoverydashboard" component={ App }/>        
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
serviceWorker.unregister();
