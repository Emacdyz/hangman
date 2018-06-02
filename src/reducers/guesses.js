//src/reducers/guesses.js
import { GUESSED_LETTER } from '../actions/guessedLetter'
import {wordToGuess} from '../data'

const initialState = wordToGuess.map(function(l){return '_'})
let guessesSoFar = []

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case GUESSED_LETTER:

      guessesSoFar = guessesSoFar.concat(payload)

      return  wordToGuess.map((letter) => {
        if (guessesSoFar.includes(letter)) return letter
        else return '_'
      })

    default :
      return state
  }
}

