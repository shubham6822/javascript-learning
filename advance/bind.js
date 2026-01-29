let multiple = (a, b) => {
  return a * b;
};

console.log(multiple(2, 3)); // Output: 6

// Using bind to create a new function with 'a' preset to 2
let multipleByTwo = multiple.bind(this, 2);

console.log(multipleByTwo(5)); // Output: 10
