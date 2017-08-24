import { INCREMENT_TOTAL_SCORE, DECREMENT_TOTAL_SCORE, CLEAR_SCORE } from '../actions/results'

/*
 * state = {<holeNumber>: <score>}
 */

 const initialState = {
   totalScore: 0,
 }

 
const results = (state = initialState, action) => {
	switch (action.type) {
    case INCREMENT_TOTAL_SCORE:
      const incrementedTotalScore = state.totalScore + 1
      return Object.assign({}, state, { totalScore: incrementedTotalScore })
    case DECREMENT_TOTAL_SCORE:
      const decrementedTotalScore = state.totalScore - 1
      return Object.assign({}, state, { totalScore: decrementedTotalScore })
    case CLEAR_SCORE:
			return initialState
		default:
			return state
	}
}

export default results