import { AUTH_SET_TOKEN, AUTH_DISCARD_TOKEN, AUTH_SET_USER } from '../actions/auth'

/*
 * state = {<holeNumber>: <score>}
 */

 const initialState = {}

 
const holes = (state = initialState, action) => {
	switch (action.type) {
    case AUTH_SET_TOKEN:
      return Object.assign({}, state, { token: action.token })
    case AUTH_DISCARD_TOKEN:
      return {}
    case AUTH_SET_USER:
    return Object.assign({}, state, { user: action.user })
    default:
      return state
	}
}

export default holes