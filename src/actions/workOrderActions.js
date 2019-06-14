import axios from 'axios';  
import { ADD_WORK_ORDER, GET_WORK_ORDERS, DETAILS, FILTER, WORK_ORDER_PARTS } from './types';

const API_URL = 'http://localhost:4000/api';  


export const _addWorkOrder = (data) => dispatch => {
        axios.post(`${API_URL}/work/orders/add`, data)
        .then(res => dispatch({
            type: ADD_WORK_ORDER,
            payload: res.data
          }))
        .catch((error) => {
            dispatch({
                type: ADD_WORK_ORDER,
                payload: error
              })
        })
}

export const _updateWorkOrderParts = (data) => dispatch => {
  axios.put(`${API_URL}/work/orders/update/parts/${data._id}`, data)
  .then(res => dispatch({
      type: WORK_ORDER_PARTS,
      payload: res.data
    }))
  .catch((error) => {
      dispatch({
          type: WORK_ORDER_PARTS,
          payload: error
        })
  })
}


export const _getWorkOrders = () => dispatch =>  {
     axios.get(`${API_URL}/work/orders/`)
        .then(res => dispatch({
                type: GET_WORK_ORDERS,
                payload: res.data
              }))
        .catch((error) => {
            dispatch({
                type: GET_WORK_ORDERS,
                payload: error
              })
        })
}

export const _workOrderDetails = (id) => dispatch => {
  axios.get(`${API_URL}/work/orders/view/${id}`)
  .then(res => dispatch({
      type: DETAILS,
      payload: res.data
    }))
  .catch((error) => {
      dispatch({
          type: DETAILS,
          payload: error
        })
  })
}

export const _filterWorkOrders = (data) => dispatch => {
  axios.post(`${API_URL}/work/orders/filtered/view`, data)
  .then(res => dispatch({
      type: FILTER,
      payload: res.data
    }))
  .catch((error) => {
      dispatch({
          type: FILTER,
          payload: error
        })
  })
}