import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import locationReducer from './locationReducer';
import userReducer from './userReducer';
import partReducer from './partReducer';
import assetReducer from './assetReducer';
import teamReducer from './teamReducer';
import workOrderReducer from './workOrderReducer';
import meterReducer from './meterReducer';

export default combineReducers({
    LOGIN: loginReducer,
    _locations: locationReducer,
    _users: userReducer,
    _parts: partReducer,
    _assets: assetReducer,
    _teams: teamReducer,
    _workOrders: workOrderReducer,
    _meters: meterReducer
})