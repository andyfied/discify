import { INCREMENT_SCORE, DECREMENT_SCORE, ADD_HOLE, CLEAR_HOLES } from '../actions/holes'

/*
 * state = {<holeNumber>: <score>}
 */

 const initialState = {}

 
const holes = (state = initialState, action) => {
	switch (action.type) {
		case ADD_HOLE:
			//If the hole alread exists
			if (state[action.holeNumber]) {
				return state
			}
			return Object.assign({}, state, { [action.holeNumber]: 0 })
		case INCREMENT_SCORE:
			const incrementedScore = state[action.holeNumber] + 1
			return Object.assign({}, state, { [action.holeNumber]: incrementedScore })
		case DECREMENT_SCORE:
			const decrementedScore = state[action.holeNumber] - 1
			return Object.assign({}, state, { [action.holeNumber]: decrementedScore })
		case CLEAR_HOLES:
			return initialState
			default:
			return state
	}
}

export default holes