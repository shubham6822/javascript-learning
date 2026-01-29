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

// Using call to borrow the printFullName method from name object
name1.printFullName.call(name2); // Output: john doe

// Example with additional arguments
function introduce(city, country) {
  console.log(
    `My name is ${this.fname} ${this.lname}, I live in ${city}, ${country}.`,
  );
}

introduce.call(name1, "New York", "USA"); // Output: My name is shubham sharma, I live in New York, USA.
introduce.call(name2, "Los Angeles", "USA"); // Output: My name is john doe, I live in Los Angeles, USA.
