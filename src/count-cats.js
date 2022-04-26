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
let result = []
let counter = 0
  for (let i = 0; i <= backyard.length-1; i++) {
    result = backyard[i].filter(el => {
    if (el === '^^') {
    counter = counter + 1
    }
  })
  }
return counter
}

module.exports = {
  countCats
};
