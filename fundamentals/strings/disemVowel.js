const disemvowel = (str) => {
  return str.replace(/[aeiouAEIOU]/g, "");
};

module.exports = disemvowel;
