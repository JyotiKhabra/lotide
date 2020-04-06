
const assertEqual = require('../assertEqual.js')
const eqArrays = require('../eqArrays.js')


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
assertEqual(eqArrays("Jyoti", "Jyoti"), false);