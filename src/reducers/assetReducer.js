import { ADD_ASSET, GET_ASSETS, DETAILS, FILTER } from '../actions/types';

const initialState = {
assets: [],
filteredAssets: [],
response: {},
assetDetails: {}
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_ASSETS: 
        return {
            ...state,
            assets: action.payload,
        }
        case ADD_ASSET:
          return { 
          ...state, 
          response: action.payload,
          }
          case DETAILS:
          return { 
          ...state, 
          response: {},
          assetDetails: action.payload
          }
          case FILTER: 
          return {
              ...state,
              filteredAssets: action.payload,
          }
        default: 
        return state;
    }
}

