import { LOGIN_DETAILS } from './types';

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