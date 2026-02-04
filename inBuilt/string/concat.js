let text = "hello";
let text2 = "world";

function customConcatOptimization(a, b) {
  return text + text2;
}

// Testing the custom charAt method
console.log("String:", text, text2);
console.log("customConcat", customConcat(text, text2));
console.log("inbuilt", text.concat(text2));
