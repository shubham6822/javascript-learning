let text = "Hello, world!";

// Custom slice function for string
String.prototype.customSlice = function (start, end) {
  let result = "";
  for (let i = start; i < end && i < this.length; i++) {
    result += this[i];
  }
  return result;
};

// Testing the custom slice method
console.log("String:", text);
console.log("Custom Slice (0, 5):", text.customSlice(0, 5));
console.log("Custom Slice (7, 12):", text.customSlice(7, 12));
console.log("Built-in Slice (0, 5):", text.slice(0, 5));
console.log("Built-in Slice (7, 12):", text.slice(7, 12));
