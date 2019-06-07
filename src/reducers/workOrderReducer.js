import { ADD_WORK_ORDER, GET_WORK_ORDERS, DETAILS, FILTER } from '../actions/types';

const initialState = {
workOrders: [],
filteredWorkOrders: [],
response: {},
workOrderDetails: {}
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_WORK_ORDERS: 
        return {
            ...state,
            workOrders: action.payload,
        }
        case ADD_WORK_ORDER:
          return { 
          ...state, 
          response: action.payload,
          }
          case DETAILS:
          return { 
          ...state, 
          response: {},
          workOrderDetails: action.payload
          }
          case FILTER: 
          return {
              ...state,
              filteredWorkOrders: action.payload,
          }
        default: 
        return state;
    }
}