// Container for all Reducers
import { combineReducers } from 'redux'
import userReducer from './user/user-reducer'

import userReducer from './user/user-reducer.js'

export default combineReducers ({
  user: userReducer
})
