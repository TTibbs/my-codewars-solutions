const removeChar = (str) => {
  if (str.length <= 2) {
    return "";
  }
  return str.substring(1, str.length - 1);
};

module.exports = removeChar;
