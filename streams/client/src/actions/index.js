import { SIGN_IN, SIGN_OUT, ADD_STREAM } from './types'

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  }
}

export const signOut = params => {
  return {
    type: SIGN_OUT
  }
}

export const addStream = ({ title, description }) => {
  return {
    type: ADD_STREAM,
    payload: {
      title,
      description
    }
  }
}
