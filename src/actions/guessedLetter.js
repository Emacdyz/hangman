
export const GUESSED_LETTER = 'GUESSED_LETTER'

export const letterguessed = letter => ({
  type: GUESSED_LETTER,
  payload: letter
})
