import { ADD_TEAM, GET_TEAMS } from '../actions/types';

const initialState = {
teams: [],
response: {}
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_TEAMS: 
        return {
            ...state,
            teams: action.payload,
        }
        case ADD_TEAM:
          return { 
          ...state, 
          response: action.payload,
          }
        default: 
        return state;
    }
}
