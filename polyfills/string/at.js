let text = "Hello, world!";

String.prototype.myAt = function (index) {
  if (typeof index !== "number") throw new TypeError("Index must be a number");
  //for negative index
  if (index < 0) index = index + this.length;

  return this[index];
};
console.log(text.myAt(-1));
