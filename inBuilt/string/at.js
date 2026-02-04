let text = "Hello, world!";

function customAt(text, index) {
  if (index > 0) {
    for (i = 0; i < text.length; i++) {
      if (i === index) return text[i];
    }
  } else {
    for (i = text.length; i > 0; i--) {
      console.log("i", i, text[i]);
      if (Math.abs(index) == i) {
        return text[i];
      }
    }
  }
}

// Testing the custom charAt method
console.log("String:", text);
console.log("Custom charAt(7):", customAt(text, -2));
console.log("Built-in charAt(7):", text.at(-2));
