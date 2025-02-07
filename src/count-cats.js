const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats (backyard) {
let counter = 0
for (let i = 0; i < backyard.length; i++) {
  backyard[i].filter(el => {counter = el === '^^' ? counter +=1 : counter})
      }
  return counter
}

module.exports = {
  countCats
};
