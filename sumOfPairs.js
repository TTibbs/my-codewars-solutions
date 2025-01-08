const sumPairs = (ints, s) => {
  // Create a new set to keep track of the numbers
  let a = new Set();
  // Loop through each number in the ints array
  for (let num of ints) {
    // Finding the complement in the sum
    let b = s - num;
    // If complement is found in the set of numbers seen it's added and returned in the array
    if (a.has(b)) {
      return [b, num];
    }
    // If no complement doesn't exist it's added to the seen set
    a.add(num);
  }
  // If no pair is found, undefined is returned
  return undefined;
};

module.exports = sumPairs;
