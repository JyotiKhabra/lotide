const eqArrays = require('./eqArrays.js')
const assertArraysEqual = require('./assertArraysEqual.js')

const middle = function (nums) {
  let middleElement = [];
  if (nums.length <= 2) {
    return middleElement
  }
  const midPoint = Math.floor(nums.length / 2)
  const isEven = nums.length % 2 === 0
  if (isEven) {
    middleElement.push(nums[midPoint - 1])
  }
  middleElement.push(nums[midPoint])
  return middleElement;
}
module.exports = middle

