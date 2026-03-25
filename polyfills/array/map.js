let arr = [1, 2, 3, 4, 5];

// Custom map function for array
Array.prototype.customMap = function (callbackFn, thisArg) {
  if (typeof callbackFn !== "function") throw new TypeError("Callback should be function ");
  let newArr = [];
  for (let index = 0; index < this.length; index++) {
    if (index in this) {
      newArr[index] = callbackFn.call(thisArg, this[index], index, this);
    }
  }
  return newArr;
};

// 1. Index argument
console.log("\n--- Test 1: Index argument ---");
console.log(
  "native  map (element + index):",
  arr.map((x, i) => `${i}:${x}`),
);
// Expected: [ '0:1', '1:2', '2:3', '3:4', '4:5' ]
console.log(
  "customMap (element + index):",
  arr.customMap((x, i) => `${i}:${x}`),
);

// 2. Array reference (third callback argument)
console.log("\n--- Test 2: Array reference (third argument) ---");
console.log(
  "native  map (array ref):",
  arr.map((x, i, a) => a.length),
);
// Expected: [ 5, 5, 5, 5, 5 ]
console.log(
  "customMap (array ref):",
  arr.customMap((x, i, a) => (a ? a.length : "no array")),
);

// 3. thisArg (second parameter to map)
console.log("\n--- Test 3: thisArg ---");
const multiplier = { factor: 10 };
console.log(
  "native  map (thisArg):",
  arr.map(function (x) {
    return x * this.factor;
  }, multiplier),
);
// Expected: [ 10, 20, 30, 40, 50 ]
console.log(
  "customMap (thisArg):",
  arr.customMap(function (x) {
    return x * this.factor;
  }, multiplier),
);

// 4. Sparse array (holes)
console.log("\n--- Test 4: Sparse array ---");
const sparse = [1, , , 4]; // indices 1 and 2 are holes
console.log(
  "native  map (sparse):",
  sparse.map((x) => x * 2),
);
// Expected: [ 2, <2 empty items>, 8 ]  — holes preserved
console.log(
  "customMap (sparse):",
  sparse.customMap((x) => x * 2),
);
