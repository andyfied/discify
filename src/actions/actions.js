/*
 * action types
 */

export const INCREMENT_SCORE = 'INCREMENT_SCORE';
export const DECREMENT_SCORE = 'DECREMENT_SCORE';
export const ADD_HOLE = 'ADD_HOLE';
export const CLEAR_SCORE = 'CLEAR_SCORE';


export const incrementScore = (holeNumber) => {
    return { type: INCREMENT_SCORE, holeNumber: holeNumber }
}

export const decrementScore = (holeNumber) => {
    return { type: DECREMENT_SCORE, holeNumber: holeNumber }
}

export const addHole = (holeNumber) => {
    return { type: ADD_HOLE, holeNumber: holeNumber }
}

export const clearScore = () => {
    return { type: CLEAR_SCORE }
}