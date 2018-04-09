import { GUESSED_LETTER } from '../actions/guessedLetter'

const data = ["awkward", "banjo", "hammer", "croquet", "dwarves", "gypsy", "ivory", "jukebox", "kayak", "salad", "kiosk", "window", "duck", "paintball"]
export const chosenWord = data[Math.floor(Math.random()*data.length)];
export const playerWord = chosenWord.replace(/./g, "_");
let makeAguess = [];
let index;

const initialState = playerWord;

const guesses = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case GUESSED_LETTER :

      makeAguess = makeAguess.concat(payload);

        if (playerWord.includes(makeAguess)) {
          window.alert(`Nice guess! It is on position ${playerWord.indexOf(payload)}`)
        }

        else {window.alert('Wrong guess')}


    default :
      return state
  }
}

export default guesses
