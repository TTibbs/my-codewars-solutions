const positiveSum = (arr) => {
  let total = 0;
  for (let i in arr) {
    if (arr[i] > 0) {
      total += arr[i];
    }
  }
  return total;
};

module.exports = positiveSum;
