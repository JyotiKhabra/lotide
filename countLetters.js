const assertEqual = require('./assertEqual.js')

const countLetters = function (someString) {
  const newCharacters = (someString.split(' ').join(''));
  const characterFrequencies = {};
  
  for (const character of newCharacters) {
    if (characterFrequencies[character] === undefined) {
      characterFrequencies[character] = 1;
    } else {
      characterFrequencies[character]++;
    }
  }
  return characterFrequencies;
};
module.exports = countLetters

//test
// const letters = "LIGHTHOUSE IN THE HOUSE";
// console.log(countLetters(letters));
//test
// assertEqual(countLetters("lighthouse in the house").l, 1);




