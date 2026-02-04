let text = "Hello, world!";

// Custom length function for string
function customLength(str) {
  let count = 0;
  for (let char of str) {
    count++;
  }
  return count;
}

// Testing the custom length method
console.log("String:", text);
console.log("Custom Length:", customLength(text));
console.log("Built-in Length:", text.length);
