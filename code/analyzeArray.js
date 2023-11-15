function analyzeArray(array) {
  const sortedArray = [...array].sort();

  const average =
    array.reduce((total, num) => {
      return total + num;
    }, 0) / array.length;

  const min = sortedArray.shift();
  const max = sortedArray.pop();
  const length = array.length;

  return { average, min, max, length };
}

module.exports = analyzeArray;
