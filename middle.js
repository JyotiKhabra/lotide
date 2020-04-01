const eqArrays = function (actual, expected) {

  if (!Array.isArray(actual) || !Array.isArray(expected)) {
    return false;
  }

  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
}
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`😉 Asssertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😱 Assertion Failed: ${actual} !== ${expected}`);
  }
}

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

assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
