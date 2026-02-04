let text = "Hello, world!";

function customAt(text, index) {
  if (index > 0) {
    for (i = 0; i < text.length; i++) {
      if (i === index) return text[i];
    }
  } else {
    let rightIndex = text.length - Math.abs(index);
    for (i = 0; i < text.length; i++) {
      if (i === rightIndex) return text[i];
    }
  }
}

function customOptimizationAt(text, index) {
  // Convert negative index to positive
  const actualIndex = index < 0 ? text.length + index : index;

  return text[actualIndex];
}

// Testing the custom charAt method
console.log("String:", text);
console.log("Custom charAt(7):", customAt(text, -2));
console.log("customOptimizationAt", customOptimizationAt(text, -2));
console.log("Built-in charAt(7):", text.at(-2));
