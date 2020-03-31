const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`U+1F64C Asssertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`U+1F612 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function (array) {
  return array[0];
}

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
