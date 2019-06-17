import axios from 'axios';
import { API_URL } from './apiMiddleware';
import { GET_USERS } from './types';


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