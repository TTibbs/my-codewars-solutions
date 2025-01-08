const filterList = (l) => {
  // Declare new array
  let a = [];
  // Loop through original array
  for (let i = 0; i < l.length; i++) {
    // If a number is found..
    if (typeof l[i] === "number") {
      // Push it to the new array
      a.push(l[i]);
    }
  }
  return a;
};

module.exports = filterList;
