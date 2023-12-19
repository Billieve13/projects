
module.exports = function sum(a, b) {
  //var a = 1;
  //var b = 2;
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments must be numbers");
  }
  return a + b;
};
