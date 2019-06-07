import axios from 'axios';  
import { GET_USERS } from './types';

const API_URL = 'http://localhost:4000/api';  



export const _getUsers = () => dispatch =>  {
     axios.get(`${API_URL}/users/`)
        .then(res => dispatch({
                type: GET_USERS,
                payload: res.data
              }))
        .catch((error) => {
            dispatch({
                type: GET_USERS,
                payload: error
              })
        })
}