import { createStore, applyMiddleware  } from 'redux';
import thunk from 'thunk';
import rootReducer from '../reducers'

const initialState = {
    data: []
}

const middleware = [thunk]


const store = createStore(rootReducer, initialState, applyMiddleware(...middleware))

export default store;