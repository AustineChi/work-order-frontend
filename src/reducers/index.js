import { combineReducers } from 'redux';
import assetReducer from './assetReducer';
import workOrderReducer from './workOrderReducer';

export default combineReducers({
    assets: assetReducer,
    workOrders: workOrderReducer
})