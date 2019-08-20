import { combineReducers } from 'redux'
import authReducer from './authReducer'
import fomrReducer from './formReducer'

export default combineReducers({
  auth: authReducer,
  form: fomrReducer
})
