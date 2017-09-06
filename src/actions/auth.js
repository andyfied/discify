/*
 * action types
 */

export const AUTH_SET_TOKEN = 'AUTH_SET_TOKEN'
export const AUTH_DISCARD_TOKEN = 'AUTH_DISCARD_TOKEN'
export const AUTH_SET_USER = 'AUTH_SET_USER'


export const authSetToken = (token) => ({
    type: AUTH_SET_TOKEN, token: token
})

export const authDiscardToken = () => ({
    type: AUTH_DISCARD_TOKEN
})

export const authSetUser = (user) => ({
    type: AUTH_SET_USER, user: user
})