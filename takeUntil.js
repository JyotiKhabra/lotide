const eqArrays = require('./eqArrays.js')
const assertArraysEqual = require('./assertArraysEqual.js')

const takeUntil = function (array, callback) {
  for (let i = 0; i < array.length; i++) {

    if (callback(array[i])) {
      return array.slice(0, i)
    }
  }

  return undefined
}
module.exports = takeUntil

//test 
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
// console.log(results1);

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// assertArraysEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);
// console.log(results2);

//results
// [ 1, 2, 5, 7, 2 ]
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]
