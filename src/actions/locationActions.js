import axios from 'axios';  
import { API_URL } from './apiMiddleware';
import { ADD_LOCATION, GET_LOCATIONS } from './types';

export const _addLocation = (data) => dispatch => {
        axios.post(`${API_URL}/locations/add`, data)
        .then(res => dispatch({
            type: ADD_LOCATION,
            payload: res.data
          }))
        .catch((error) => {
            dispatch({
                type: ADD_LOCATION,
                payload: error
              })
        })
}

export const _getLocations = () => dispatch =>  {
     axios.get(`${API_URL}/locations/`)
        .then(res => dispatch({
                type: GET_LOCATIONS,
                payload: res.data
              }))
        .catch((error) => {
            dispatch({
                type: GET_LOCATIONS,
                payload: error
              })
        })
}