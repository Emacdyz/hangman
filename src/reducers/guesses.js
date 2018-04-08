import { GUESSED_LETTER } from '../actions/guessedLetter'

const initialState = [];

const guesses = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case GUESSED_LETTER :
      return state.concat(payload)

    default :
      return state
  }
}
export default guesses
