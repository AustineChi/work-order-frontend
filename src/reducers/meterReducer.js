import { GET_METERS, GET_METER_CHANGE_LOG } from '../actions/types';

const initialState = {
metersDetials: [],
changeLog: [],
response: {}
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_METERS: 
        return {
            ...state,
            metersDetials: action.payload,
        }
        case GET_METER_CHANGE_LOG: 
        return {
            ...state,
            changeLog: action.payload,
        }
        default: 
        return state;
    }
}