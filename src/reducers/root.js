import { combineReducers } from 'redux'
import userReducer from './usuario'

const rootReducer = combineReducers({
  usuario: userReducer,
})

export default rootReducer
