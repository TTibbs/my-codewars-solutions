const countBits = (n) => {
  /* Return n in binary as a string, split the 
       string by '1' and calculate the number of 1s 
       by taking the length and subtracting one so that 
       it counts all of the 1s */
  return n.toString(2).split("1").length - 1;
};

module.exports = countBits;
