import axios from 'axios';  
import { GET_METERS , GET_METER_CHANGE_LOG} from './types';
import { METER_MANAGER_API } from './apiMiddleware';


export const _getMeters = () => dispatch =>  {
     axios.get(`${METER_MANAGER_API}/Meter/search/`,
     { headers: {
        "APIKey" : "CZ]]JUphGdh&_hLg7vXtBtSUmGmXTQ@rVTy4h[[}{wH2c355KEC5Y)"
      }
    }
 )
        .then(res => dispatch({
                type: GET_METERS,
                payload: res.data.data
              }))
        .catch((error) => {
            dispatch({
                type: GET_METERS,
                payload: error
              })
        })
}

export const _getMeterChangeLog = () => dispatch =>  {
    axios.get(`${METER_MANAGER_API}/Meter/changelogs/search`,
    { headers: {
       "APIKey" : "CZ]]JUphGdh&_hLg7vXtBtSUmGmXTQ@rVTy4h[[}{wH2c355KEC5Y)"
     }
   }
)
       .then(res => dispatch({
               type: GET_METER_CHANGE_LOG,
               payload: res.data.data
             }))
       .catch((error) => {
           dispatch({
               type: GET_METER_CHANGE_LOG,
               payload: error
             })
       })
}