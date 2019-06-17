import { ADD_ASSET, GET_ASSETS, DETAILS, FILTER, UPDATE, RESET } from '../actions/types';

const initialState = {
assets: [],
filteredAssets: [],
response: {},
assetDetails: {},
addPartsModal: false
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
          case UPDATE:
          return { 
          ...state, 
          response: {},
          assetDetails: action.payload.data,
          addPartsModal: action.payload.success
          }
          case FILTER: 
          return {
              ...state,
              filteredAssets: action.payload,
          }
          case RESET:
          return { 
          ...state, 
          assetDetails: action.payload
          }
        default: 
        return state;
    }
}

