import { combineReducers } from 'redux'
import counterReducer from './const_reducer'

export default combineReducers({
    count: counterReducer,
})