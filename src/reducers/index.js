import { combineReducers } from 'redux'
import holes from './holes'
import results from './results'
import auth from './auth'

const discifyApp = combineReducers({
  holes,
  results,
  auth,
})

export default discifyApp