const descendingOrder = (n) => {
  return parseInt(n.toString().split("").sort().reverse().join(""), 10);
};

module.exports = descendingOrder;
