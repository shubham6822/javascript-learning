"use strict";

let userOne = {
    email:"shubham@gmail.com",
    password:"12345"
}

let userTwo = userOne;

userTwo.email= "sahil@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);