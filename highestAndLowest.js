const highAndLow = (numbers) => {
  // Store the string of numbers as substrings in an array, and convert to numeric values
  const a = numbers.split(" ").map(Number);
  // Find the biggest number
  const b = Math.max(...a);
  // Find the smallest number
  const s = Math.min(...a);
  // Return biggest & smallest
  return `${b} ${s}`;
};

module.exports = highAndLow;
