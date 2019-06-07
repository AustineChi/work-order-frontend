import axios from 'axios';  
import { ADD_PART, GET_PARTS, DETAILS } from './types';

const API_URL = 'http://localhost:4000/api';  


export const _addPart = (data) => dispatch => {
        axios.post(`${API_URL}/parts/add`, data)
        .then(res => dispatch({
            type: ADD_PART,
            payload: res.data
          }))
        .catch((error) => {
            dispatch({
                type: ADD_PART,
                payload: error
              })
        })
}

export const _getParts = () => dispatch =>  {
     axios.get(`${API_URL}/parts/`)
        .then(res => dispatch({
                type: GET_PARTS,
                payload: res.data
              }))
        .catch((error) => {
            dispatch({
                type: GET_PARTS,
                payload: error
              })
        })
}

export const _PartDetails = (id) => dispatch => {
    axios.get(`${API_URL}/parts/view/${id}`)
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