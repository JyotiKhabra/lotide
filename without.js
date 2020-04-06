const eqArrays = require('./eqArrays.js')
const assertArraysEqual = require('./assertArraysEqual.js')


const without = function (source, itemsToRemove) {
  let newArray = [];

  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
      newArray.push(source[i]);

    }
  }
  return newArray
}
module.exports = without

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
// assertArraysEqual([1], [2]);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);