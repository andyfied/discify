export const INCREMENT_TOTAL_SCORE = 'INCREMENT_TOTAL_SCORE'
export const DECREMENT_TOTAL_SCORE = 'DECREMENT_TOTAL_SCORE'
export const CLEAR_SCORE = 'CLEAR_SCORE'

export const incrementTotalScore = () => ({
  type: INCREMENT_TOTAL_SCORE
})

export const decrementTotalScore = () => ({
  type: DECREMENT_TOTAL_SCORE
})

export const clearScore = () => ({
  type: CLEAR_SCORE
})
