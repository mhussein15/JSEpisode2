/**************************************************************
 * pairs(names):
 *
 * - It accepts an array of names:
 *       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish'])
 *
 * - It returns a randomized pairing of names:
 *       [['Mishmish', 'Asis'], ['Fawas', 'Hamsa']]
 *
 * - It can handle an odd number of names:
 *       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein'])
 *       returns [['Mishmish', 'Fawas'], ['Asis', 'Hussein'], ['Hamsa']]
 *
 * - It returns an empty array if it gets passed an empty array:
 *       pairs([]) returns []
 *
 * - It returns an empty array if it gets passed nothing:
 *       pairs() returns []
 ****************************************************************/
function pairs(names = []) {
  const res = [];
  if (names.length === 0 || names === null) {
    return res;
  }
  if (names.length > 0) {
    let pair = [];
    while (names.length !== 0) {
      let first = names.getRandom();
      let second = names.getRandom();
      if (second !== undefined) {
        pair = [first, second];
      } else {
        pair = [first];
      }
      res.push(pair);
    }
    return res;
  }
}

module.exports = pairs;

/**********************************************
 * READ ME!!!!
 *
 * We've included this handy method for you.
 * It will remove a random element from an array
 * and return it to you.
 *
 * Example Usage:
 *
 * let numbers = [1, 2, 3, 4];
 * let random = numbers.getRandom();  // randomly returns something from the array. e.g. 3
 * console.log(random); // 3 (the random element)
 * console.log(numbers);  // [1, 2, 4] (missing the random element)
 ************************************************/
Array.prototype.getRandom = function () {
  return this.splice(Math.floor(Math.random() * this.length), 1)[0];
};

console.log(pairs(["m", "h"]));
