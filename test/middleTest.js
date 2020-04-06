//const eqArrays = require('../eqArrays.js')
//const assertArraysEqual = require('../assertArraysEqual.js')
const middle = require('../middle.js')
const assert = require('chai').assert;

describe('#middle', () => {

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1,2,3]),[2]);
  })
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  })

})

