//src/reducers/guesses.js
import { GUESSED_LETTER } from '../actions/guessedLetter'
import {wordToGuess} from '../data'

const initialState = 8

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case GUESSED_LETTER:
    console.log(wordToGuess)
    
    if (!wordToGuess.includes(payload)) return state - 1
    else return state  

    default :
      return state
  }
}