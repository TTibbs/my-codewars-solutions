module.exports = {
  toJadenCase: function () {
    let a = this.split(" ");
    for (let i = 0; i < a.length; i++) {
      a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1).toLowerCase();
    }
    return a.join(" ");
  },
};

String.prototype.toJadenCase = module.exports.toJadenCase;
