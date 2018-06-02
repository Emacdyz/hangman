const data = ["awkward", "banjo", "hammer", "croquet", "dwarves", "gypsy", "ivory", "jukebox", "kayak", "salad", "kiosk", "window", "duck", "paintball"]

export const chosenWord = data[Math.floor(Math.random()*data.length)];

export const wordToGuess = Array.from(chosenWord);

// export const playerWord = Array.from(chosenWord.replace(/./g, "_"));


