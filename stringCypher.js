const encode = (plaintext) => {
  // Declare alphabet because why not
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  // Declare empty string to return numbers to
  let a = "";
  for (let i = 0; i < plaintext.length; i++) {
    // To analyse each letter in the string
    let b = plaintext[i];
    let c = alphabet.indexOf(b.toLowerCase());
    // Handle characters not found in alphabet
    if (c === -1) {
      a += b;
    } else {
      // Convert to represent binary
      if (c % 2 === 0) {
        a += "0";
      } else {
        a += "1";
      }
    }
  }
  return a;
};

module.exports = encode;
