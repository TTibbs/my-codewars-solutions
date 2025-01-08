const invert = (array) => {
  let a = [];
  for (let i = 0; i < array.length; i++) {
    a.push(-array[i]);
  }
  return a;
};

module.exports = invert;
