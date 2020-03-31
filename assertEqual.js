const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log("U+1F64C " + " Asssertion Passed: " + actual + " === " + expected);
  } else {
    console.log("U+1F612 " + " Assertion Failed: " + actual + " !== " + expected);
  }

};
assertEqual("lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
