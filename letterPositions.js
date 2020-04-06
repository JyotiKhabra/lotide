const eqArrays = require('./eqArrays.js')
const assertArraysEqual = require('./assertArraysEqual')


const letterPositions = function (sentence) {
  const spacelessSentence = sentence.split(' ').join('');
  const results = {};
  for (let i = 0; i < spacelessSentence.length; i++) {
    if (results[spacelessSentence[i]]) {
      results[spacelessSentence[i]].push(i);
    } else {
      results[spacelessSentence[i]] = [i];
    }
  }
  return results;
};
module.exports = letterPositions

//test
// console.log(letterPositions("lighthouse in the house"));
//test
// assertArraysEqual(letterPositions("hello").e, [1]);
