let arr = [1, 2, 3, 4, 5];

// Write your customReduce here:
Array.prototype.customReduce = function (callbackFn, initialValue = 0) {
  if (typeof callbackFn !== "function") throw new TypeError("Callback should be function ");
  for (let index = 0; index < this.length; index++) {
    initialValue = callbackFn(initialValue, this[index], index, this);
  }
  return initialValue;
};

// Q1. Sum all numbers (with initial value)
console.log("\n--- Q1: Sum with initial value ---");
console.log(
  "native  reduce:",
  arr.reduce((acc, x) => acc + x, 0),
);
// Expected: 15
console.log(
  "customReduce:  ",
  arr.customReduce((acc, x) => acc + x, 0),
);

// Q2. Multiply all numbers (with initial value)
console.log("\n--- Q2: Product with initial value ---");
console.log(
  "native  reduce:",
  arr.reduce((acc, x) => acc * x, 1),
);
// Expected: 120
console.log(
  "customReduce:  ",
  arr.customReduce((acc, x) => acc * x, 1),
);

// ─── Gap Tests: tricky behaviors a naive customReduce won't handle ───────────

// Q3. No initial value — first element becomes accumulator, loop starts at index 1
console.log("\n--- Q3: No initial value ---");
console.log(
  "native  reduce:",
  arr.reduce((acc, x) => acc + x),
);
// Expected: 15  (starts: acc=1, then adds 2,3,4,5)
console.log(
  "customReduce:  ",
  arr.customReduce((acc, x) => acc + x),
);

// Q4. Index argument
console.log("\n--- Q4: Index argument ---");
console.log(
  "native  reduce:",
  arr.reduce((acc, x, i) => acc + `[${i}:${x}]`, ""),
);
// Expected: '[0:1][1:2][2:3][3:4][4:5]'
console.log(
  "customReduce:  ",
  arr.customReduce((acc, x, i) => acc + `[${i}:${x}]`, ""),
);

// Q5. Array reference (fourth callback argument)
console.log("\n--- Q5: Array reference ---");
console.log(
  "native  reduce:",
  arr.reduce((acc, x, i, a) => (i === a.length - 1 ? acc + x + "(done)" : acc + x), 0),
);
// Expected: 15(done)
console.log(
  "customReduce:  ",
  arr.customReduce((acc, x, i, a) => (i === a.length - 1 ? acc + x + "(done)" : acc + x), 0),
);

// Q6. Single element array — no initial value
console.log("\n--- Q6: Single element, no initial value ---");
let callCount = 0;
console.log(
  "native  reduce:",
  [42].reduce((acc, x) => {
    callCount++;
    return acc + x;
  }),
);
console.log("native  callback calls:", callCount); // Expected: 0
callCount = 0;
console.log(
  "customReduce:  ",
  [42].customReduce((acc, x) => {
    callCount++;
    return acc + x;
  }),
);
console.log("customReduce callback calls:", callCount); // Should also be 0

// Q7. Empty array WITH initial value — returns initial value, callback never called
console.log("\n--- Q7: Empty array with initial value ---");
console.log(
  "native  reduce:",
  [].reduce((acc, x) => acc + x, 99),
);
// Expected: 99
console.log(
  "customReduce:  ",
  [].customReduce((acc, x) => acc + x, 99),
);

// Q8. Empty array WITHOUT initial value — must throw TypeError
console.log("\n--- Q8: Empty array, no initial value (should throw) ---");
try {
  [].reduce((acc, x) => acc + x);
} catch (e) {
  console.log("native  reduce throws:", e.message);
}
try {
  [].customReduce((acc, x) => acc + x);
} catch (e) {
  console.log("customReduce throws: ", e.message);
}
// Expected: both throw TypeError

// Q9. Sparse array — holes must be skipped
console.log("\n--- Q9: Sparse array ---");
// eslint-disable-next-line no-sparse-arrays
const sparse = [1, , , 4, , 6];
console.log(
  "native  reduce:",
  sparse.reduce((acc, x) => acc + x, 0),
);
// Expected: 11  (1 + 4 + 6, holes skipped)
console.log(
  "customReduce:  ",
  sparse.customReduce((acc, x) => acc + x, 0),
);
// Naive: treats holes as undefined → 1 + undefined + ... = NaN

// Q10. Build object from array (real-world use case)
console.log("\n--- Q10: Build object ---");
const words = ["hello", "world", "foo"];
console.log(
  "native  reduce:",
  words.reduce((acc, w) => {
    acc[w] = w.length;
    return acc;
  }, {}),
);
// Expected: { hello: 5, world: 5, foo: 3 }
console.log(
  "customReduce:  ",
  words.customReduce((acc, w) => {
    acc[w] = w.length;
    return acc;
  }, {}),
);
