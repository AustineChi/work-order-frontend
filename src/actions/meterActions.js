import axios from 'axios';  
import { GET_METERS , GET_METER_CHANGE_LOG} from './types';

const API_URL = 'https://metermanager.staging.rensource.energy/api';  


export const _getMeters = () => dispatch =>  {
     axios.get(`${API_URL}/Meter/search/`,
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
    axios.get(`${API_URL}/Meter/changelogs/search`,
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