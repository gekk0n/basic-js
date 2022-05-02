const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sortedArr = []
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] > 0) {
      sortedArr.push(matrix[0][i])
    }
  }
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i - 1][j] !== 0 && matrix[i][j] !== 0)
      sortedArr.push(matrix[i][j])
    }
  }
  if (sortedArr.length !== 0)
  return result = sortedArr.reduce((a, b) => a + b);
  else {
    return 0
  }
}

module.exports = {
  getMatrixElementsSum
};
