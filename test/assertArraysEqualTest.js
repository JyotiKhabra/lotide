
const eqArrays = require('../eqArrays.js')
const assertArraysEqual = require('../assertArraysEqual.js')

assertArraysEqual([1, 2, 4], [1, 2, 3]);
assertArraysEqual([1, 2], [1, 2]);
assertArraysEqual("Jyoti", "Jyoti");