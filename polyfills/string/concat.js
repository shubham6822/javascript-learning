let text = "hello";
let text2 = "world";

String.prototype.customConcat = function (str) {
  return this + str;
};

// Testing the custom charAt method
console.log("String:", text, text2);
console.log("customConcat", text.customConcat(text2));
console.log("inbuilt", text.concat(text2));
