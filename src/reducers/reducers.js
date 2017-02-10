import { combineReducers } from 'redux'
import { INCREMENT_SCORE, DECREMENT_SCORE, ADD_HOLE, CLEAR_SCORE } from '../actions/actions';

/*
 * state = {<holeNumber>: <score>}
 */
const holes = (state = {}, action) => {
	switch (action.type) {
		case ADD_HOLE:
			//If the hole alread exists
			if (state[action.holeNumber]) {
				return state;
			}
			return Object.assign({}, state, { [action.holeNumber]: 0 });
		case INCREMENT_SCORE:
			let incrementedScore = state[action.holeNumber] + 1;
			return Object.assign({}, state, { [action.holeNumber]: incrementedScore });
		case DECREMENT_SCORE:
			let decrementedScore = state[action.holeNumber] - 1;
			return Object.assign({}, state, { [action.holeNumber]: decrementedScore });
		case CLEAR_SCORE:
			return {};
		default:
			return state;
	}
}

const discifyApp = combineReducers({
	holes,
});

export default discifyApp;