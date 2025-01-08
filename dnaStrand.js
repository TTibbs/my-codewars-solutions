const dnaStrand = (dna) => {
  let newDna = "";

  // Loop through every character in dna and switch out where necessary
  for (let i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case "A":
        newDna += "T";
        break;
      case "T":
        newDna += "A";
        break;
      case "G":
        newDna += "C";
        break;
      case "C":
        newDna += "G";
        break;
      // For characters that aren't 'A', 'T', 'C' or 'G'
      default:
        newDna += dna[i];
    }
  }
  return newDna;
};

module.exports = dnaStrand;
