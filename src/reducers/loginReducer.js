import { LOGIN_DETAILS } from '../actions/types';

const initialState = {
    user: {}
}

export default function(state = initialState, action) {
    switch(action.type){
        case LOGIN_DETAILS: 
        return {
            ...state,
            user: action.payload
        }
        default: 
        return state;
    }
}
