const assertEqual = require('./assertEqual.js')
const eqArrays = require('./eqArrays.js')


const eqObjects = function (object1, object2) {
  const listOfKeys1 = Object.keys(object1);
  const listOfKeys2 = Object.keys(object2);

  if (listOfKeys1.length !== listOfKeys2.length) {
    return false;
  }

  for (key of listOfKeys1) {
    const value1 = object1[key]
    const value2 = object2[key]
    if (Array.isArray(value1) || Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false
      }
    } else {
      if (value1 !== value2) {
        return false;
      }
    }
  }
  return true;
}
module.exports = eqObjects

//tests
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };

// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };

// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);
