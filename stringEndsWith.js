const solution = (str, ending) => {
  let start = str.length - ending.length;
  let substring = str.substring(start);
  return substring === ending;
};

module.exports = solution;
