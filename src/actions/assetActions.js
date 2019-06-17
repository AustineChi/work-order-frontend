import axios from 'axios';
import { API_URL } from './apiMiddleware';
import { ADD_ASSET, GET_ASSETS, DETAILS, FILTER, UPDATE, RESET } from './types';

export const _addAsset = (data) => dispatch => {
        axios.post(`${API_URL}/assets/add`, data)
        .then(res => dispatch({
            type: ADD_ASSET,
            payload: res.data
          }))
        .catch((error) => {
            dispatch({
                type: ADD_ASSET,
                payload: error
              })
        })
}

export const _updateAsset = (data) => dispatch => {
  axios.put(`${API_URL}/assets/update/${data._id}`, data)
  .then(res => dispatch({
      type: UPDATE,
      payload: res.data
    }))
  .catch((error) => {
      dispatch({
          type: UPDATE,
          payload: error
        })
  })
}

export const _getAssets = () => dispatch =>  {
     axios.get(`${API_URL}/assets/`)
        .then(res => dispatch({
                type: GET_ASSETS,
                payload: res.data
              }))
        .catch((error) => {
            dispatch({
                type: GET_ASSETS,
                payload: error
              })
        })
}

export const _assetDetails = (id) => dispatch => {
  axios.get(`${API_URL}/assets/view/${id}`)
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

export const _filterAssets = (data) => dispatch => {
  axios.post(`${API_URL}/assets/filtered/view`, data)
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

export const _resetAssetDetails = () => dispatch => {
  dispatch({
    type: RESET,
    payload: {}
  })
}
