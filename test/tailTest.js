//const assertEqual = require('../assertEqual.js')
const tail = require('../tail.js')
const assert = require('chai').assert;

describe('tail', () => {

  it("returns 'labs' for ['Lighthouse', 'labs']", () => {
    assert.deepEqual(tail(['Lighthouse', 'labs']),['labs']);
  })
  it("returns 'outside' for ['Hello', 'world', 'outside']", () => {
     assert.deepEqual(tail(['Hello', 'world', 'outside']), ['outside']);
   })

})
