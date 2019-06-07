import axios from 'axios';  
import { ADD_TEAM, GET_TEAMS } from './types';

const API_URL = 'http://localhost:4000/api';  


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