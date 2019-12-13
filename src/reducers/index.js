import { combineReducers } from 'redux'
import holes from './holes'
import results from './results'
import installPrompt from './installPrompt'

const discifyApp = combineReducers({
  holes,
  results,
  installPrompt,
})

export default discifyApp