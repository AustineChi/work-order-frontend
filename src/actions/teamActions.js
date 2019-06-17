import axios from 'axios';  
import { API_URL } from './apiMiddleware';
import { ADD_TEAM, GET_TEAMS } from './types';


export const _addTeam = (data) => dispatch => {
        axios.post(`${API_URL}/teams/add`, data)
        .then(res => dispatch({
            type: ADD_TEAM,
            payload: res.data
          }))
        .catch((error) => {
            dispatch({
                type: ADD_TEAM,
                payload: error
              })
        })
}

export const _getTeams = () => dispatch =>  {
     axios.get(`${API_URL}/teams/`)
        .then(res => dispatch({
                type: GET_TEAMS,
                payload: res.data
              }))
        .catch((error) => {
            dispatch({
                type: GET_TEAMS,
                payload: error
              })
        })
}