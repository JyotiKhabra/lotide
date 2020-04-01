const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`😉 Asssertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😱 Assertion Failed: ${actual} !== ${expected}`);
  }

};

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
assertEqual(eqArrays("Jyoti", "Jyoti"), false);