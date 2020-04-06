const assertEqual = require('./assertEqual.js')
const eqArrays = require('./eqArrays.js')
const eqObjects = require('./eqObjects.js')
const inspect = require('util').inspect; // <= add this line


const assertObjectsEqual = function (actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`😉 Asssertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😱 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
module.exports = assertObjectsEqual


///test
// assertObjectsEqual({ a: 1, b: 2, c: 3 }, { d: 1, e: 2, f: 3 })
// assertObjectsEqual({ a: 1, b: 2, c: 3 }, { b: 2, a: 1, c: 3 })

