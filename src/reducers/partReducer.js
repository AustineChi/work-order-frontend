import { GET_PARTS, ADD_PART, DETAILS } from '../actions/types';

const initialState = {
parts: [],
response: {},
partDetails: {}
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_PARTS: 
        return {
            ...state,
            parts: action.payload,
        }
        case ADD_PART:
          return { 
          ...state, 
          response: action.payload,
          }
          case DETAILS:
          return { 
          ...state, 
          response: {},
          partDetails: action.payload
          }
        default: 
        return state;
    }
}