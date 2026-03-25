let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// Write your customFilter here:
Array.prototype.customFilter = function (callbackFn, thisArg) {
  if (typeof callbackFn !== "function") throw new TypeError("Callback should be function ");
  let newArr = [];
  for (let index = 0; index < this.length; index++) {
    if (index in this) {
      let res = callbackFn.call(thisArg, this[index], index, this);
      if (res) {
        newArr.push(this[index]);
      }
    }
  }
  return newArr;
};

console.log("Arr:", arr);

// Q1. Filter even numbers
console.log("\n--- Q1: Filter even numbers ---");
console.log(
  "native  filter:",
  arr.filter((x) => x % 2 === 0),
);
// Expected: [ 2, 4, 6, 8 ]
console.log(
  "customFilter:  ",
  arr.customFilter((x) => x % 2 === 0),
);

// Q2. Filter numbers greater than 4
console.log("\n--- Q2: Filter numbers > 4 ---");
console.log(
  "native  filter:",
  arr.filter((x) => x > 4),
);
// Expected: [ 5, 6, 7, 8 ]
console.log(
  "customFilter:  ",
  arr.customFilter((x) => x > 4),
);

// ─── Gap Tests: things native filter handles that a naive customFilter won't ─

// Q3. Index argument
console.log("\n--- Q3: Index argument (keep elements at even indices) ---");
console.log(
  "native  filter:",
  arr.filter((x, i) => i % 2 === 0),
);
// Expected: [ 1, 3, 5, 7 ]
console.log(
  "customFilter:  ",
  arr.customFilter((x, i) => i % 2 === 0),
);

// Q4. Array reference (third callback argument)
console.log("\n--- Q4: Array reference (keep values below average) ---");
console.log(
  "native  filter:",
  arr.filter((x, i, a) => x < a.reduce((s, n) => s + n, 0) / a.length),
);
// Expected: [ 1, 2, 3, 4 ]  (average is 4.5)
console.log(
  "customFilter:  ",
  arr.customFilter((x, i, a) => x < a.reduce((s, n) => s + n, 0) / a.length),
);

// Q5. thisArg (second parameter to filter)
console.log("\n--- Q5: thisArg ---");
const config = { min: 3, max: 6 };
console.log(
  "native  filter:",
  arr.filter(function (x) {
    return x >= this.min && x <= this.max;
  }, config),
);
// Expected: [ 3, 4, 5, 6 ]
console.log(
  "customFilter:  ",
  arr.customFilter(function (x) {
    return x >= this.min && x <= this.max;
  }, config),
);

// Q6. Sparse array (holes)
console.log("\n--- Q6: Sparse array ---");
const sparse = [1, , , 4, , 6];
console.log(
  "native  filter:",
  sparse.filter((x) => x > 0),
);
// Expected: [ 1, 4, 6 ]  — holes are completely ignored
console.log(
  "customFilter:  ",
  sparse.customFilter((x) => x > 0),
);

// Q7. Callback must be called only for existing elements
console.log("\n--- Q7: Callback call count on sparse array ---");
let callCount = 0;
sparse.filter(() => {
  callCount++;
  return true;
});
console.log("native  filter callback calls:", callCount); // Expected: 3 (only real slots)
callCount = 0;
sparse.customFilter(() => {
  callCount++;
  return true;
});
console.log("customFilter callback calls:  ", callCount); // Should also be 3
