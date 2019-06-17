import { LOGIN_DETAILS } from './types';
import { API_URL } from './apiMiddleware';

export const loginUser = ()=> dispatch=>  {
  fetch('')
  .then(res => res.json())
  .then(user => 
    dispatch({
        type: LOGIN_DETAILS,
        payload: user
    })
    );
}