let text = "Hello, world!";

// Custom length function for string
String.prototype.customLength = function () {
  let count = 0;
  for (let char of this) {
    count++;
  }
  return count;
};

// Testing the custom length method
console.log("String:", text);
console.log("Custom Length:", text.customLength());
console.log("Built-in Length:", text.length);
