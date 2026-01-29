// Currying example using bind
let multiple = (a, b) => {
  return a * b;
};

console.log(multiple(2, 3)); // Output: 6

// Using bind to create a new function with 'a' preset to 2
let multipleByTwo = multiple.bind(this, 2);

console.log(multipleByTwo(5)); // Output: 10

// Currying example using closures
let multiply = (a) => {
  return (b) => {
    return a * b;
  };
};

let multiplyByThree = multiply(3);

console.log(multiplyByThree(4)); // Output: 12
