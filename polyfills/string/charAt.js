let text = "Hello, world!";

String.prototype.customCharAt = function (index) {
  if (typeof index !== "number") throw new TypeError("Index should be number");
  // for negative number
  if (index < 0) index = index + this.length;
  return this[index];
};

// Testing the custom charAt method
console.log("String:", text);
console.log("Custom charAt(7):", text.customCharAt(7));
console.log("Built-in charAt(7):", text.charAt(7));
