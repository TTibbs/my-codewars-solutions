const boolToWord = (bool) => {
  if (bool !== true && bool !== false) {
    return "Invalid input";
  }
  if (bool == true) {
    return "Yes";
  }
  return "No";
};

module.exports = boolToWord;
