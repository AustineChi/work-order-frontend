import { GET_LOCATIONS, ADD_LOCATION } from '../actions/types';

const initialState = {
locations: [],
response: {}
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_LOCATIONS: 
        return {
            ...state,
            locations: action.payload,
        }
        case ADD_LOCATION:
          return { 
          ...state, 
          response: action.payload,
          }
        default: 
        return state;
    }
}
