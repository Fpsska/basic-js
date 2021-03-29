const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {

  const rightSymbol = "^^";

  let newArr = matrix.join().split(',');

  let rightArr = newArr.filter(value => {
    return value == rightSymbol;
  });

  let rightArrValue = rightArr.length;

  if (rightArrValue > 0) {
    return rightArrValue;
  } else {
    return 0;
  }

};
