const assertEqual = require('./assertEqual.js')

const findKeyByValue = function (tvGenres, tvShow) {
  debugger;
  const results = {};
  let listOfKeys = Object.keys(tvGenres)

  for (key of listOfKeys) {
    if (tvGenres[key] === tvShow) {
      return key
    }
  }
  return undefined;
}
module.exports = findKeyByValue


// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '80s Show"), undefined);


