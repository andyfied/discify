/*
 * action types
 */

export const INCREMENT_SCORE = 'INCREMENT_SCORE'
export const DECREMENT_SCORE = 'DECREMENT_SCORE'
export const ADD_HOLE = 'ADD_HOLE'
export const CLEAR_HOLES = 'CLEAR_HOLES'


export const incrementScore = (holeNumber) => ({
    type: INCREMENT_SCORE, holeNumber: holeNumber
})

export const decrementScore = (holeNumber) => ({
    type: DECREMENT_SCORE, holeNumber: holeNumber
})

export const addHole = (holeNumber) => ({
    type: ADD_HOLE, holeNumber: holeNumber
})

export const clearHoles = () => ({
    type: CLEAR_HOLES
})
