import { combineReducers } from 'redux'
import holes from './holes'
import results from './results'

const discifyApp = combineReducers({
  holes,
  results,
})

export default discifyApp