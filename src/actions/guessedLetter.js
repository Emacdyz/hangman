
export const GUESSED_LETTER = 'GUESSED_LETTER'

export default (letter) => {
  return {
    type: GUESSED_LETTER,
    payload: letter
  }
}
