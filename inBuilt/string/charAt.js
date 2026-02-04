let text = "Hello, world!";

function customCharAt(str, index) {
  for (i = 0; i < str.length; i++) {
    if (i === index) {
      return str[i];
    }
  }
}

// Testing the custom charAt method
console.log("String:", text);
console.log("Custom charAt(7):", customCharAt(text, 7));
console.log("Built-in charAt(7):", text.charAt(7));
