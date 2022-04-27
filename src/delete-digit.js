const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n).split('').map((n)=> Number(n))
  let resultArr = []
  for (let i = 0; i < arr.length; i++) {
    let deleted = parseInt(arr.splice(i,1), 10)
    resultArr.push(Number(arr.join('')))
        arr.splice(i,0, deleted)
  }
  let result = Math.max(...resultArr)
  return result
}

module.exports = {
  deleteDigit
};
