import authReducer from './authReducer'
import deviceInfoReducer from './deviceInfoReducer'
import discoveryReducer from './discoveryReducer'
import coreTestsReducer from './coreTestsReducer'
import reportReducer from './reportReducer'
import CSVReducer from './CSVReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    discovery: discoveryReducer,    
    deviceInfo: deviceInfoReducer, 
    coreTest: coreTestsReducer,
    report: reportReducer,
    csv: CSVReducer
})

export default rootReducer;