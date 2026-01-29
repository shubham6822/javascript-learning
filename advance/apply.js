let name1 = {
  fname: "shubham",
  lname: "sharma",
  printFullName: function () {
    console.log(this.fname + " " + this.lname);
  },
};

name1.printFullName(); // Output: shubham sharma

let name2 = {
  fname: "john",
  lname: "doe",
};

// Using apply to borrow the method from name1
name1.printFullName.apply(name2); // Output: john doe

// Example with additional arguments
function introduce(city, country) {
  console.log(
    `My name is ${this.fname} ${this.lname}, I live in ${city}, ${country}.`,
  );
}

introduce.apply(name1, ["New York", "USA"]); // Output: My name is shubham sharma, I live in New York, USA.
introduce.apply(name2, ["Los Angeles", "USA"]); // Output: My name is john doe, I live in Los Angeles, USA.
