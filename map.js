const eqArrays = require('./eqArrays.js')
const assertArraysEqual = require('./assertArraysEqual.js')


// const words = ["ground", "control", "to", "major", "tom"];
// const nums = [55, 77, 89,];
// const nums2 = [1, 2, 3]
const map = function (array, callback) {

  const results = []
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
module.exports = map

//const results1 = map(words, word => word[0]);
// console.log(results1); 
//tests
// assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
// assertArraysEqual(map(nums, num => num * 2), [110, 154, 178]);
// assertArraysEqual(map(nums2, num => num + 5), [6, 7, 8]);