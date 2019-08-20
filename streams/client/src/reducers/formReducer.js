import { ADD_STREAM } from '../actions/types'

const INITIAL_STATE = {
  title: null,
  description: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_STREAM:
      return {
        ...state,
        title: action.payload.title,
        description: action.payload.description
      }

    default:
      return state
  }
}
