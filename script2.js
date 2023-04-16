"use strict";
const ps = require("prompt-sync");
const prompt = ps({ sigint: true }); // const prompt = require("prompt-sync")({sigint:true});

// comparison operator

//  if else condition
let age = 14;
if (age > 18) {
  console.log("player can play this game");
} else {
  console.log("player can not play this game");
}

//falsy value  are false, "" , null , undefined , 0 ;
let firstName = null;
if (firstName) {
  console.log(firstName);
} else {
  console.log("first name is empty");
}

//truthy value  are any character , any integer except zero;

//TERNARY OPERATOR or CONDITIONAL OPERATOR
let age1 = 4; // with the help of if - else condition
let drink;
if (age1 > 6) {
  drink = "cofee";
} else {
  drink = "mik";
}
console.log(drink);

let age2 = 8;
let drink2 = age >= 5 ? "coffe" : "milk";
console.log(drink);

let name = "aryan";
let age5 = 66;
if (name[0] == "y" && age5 > 18) {
  // and operator
  console.log("your name start with H and above 18");
} else {
  console.log("fuck you");
}

let name1 = "aryan";
let age4 = 66;
if (name1[0] == "y" || age4 > 18) {
  // or  operator
  console.log("your name start with H and above 18");
} else {
  console.log("fuck you");
}

// PROMPT ALWAYS TAKES INPUT IN STRING
let winningNumber = 19;
let userGuess = +prompt("Guess a number"); // + --> convert string to number

if (userGuess === winningNumber) {
  console.log("Your guess is right!!");
} else {
  if (userGuess < winningNumber) {
    console.log("too low !!!");
  } else {
    console.log("too high !!!");
  }
}

//                  SWITCH CONDITION
let day = 4;

switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thrusday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Day");
}
// array is reference type , array is mutable 
// all reference type is called object 

//  how to check is array is array or not
let fruits = ["apple", "mango", "grapes"];
let obj = {}; // object literal
// An object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ( {} ).
console.log(typeof fruits); //OBJECT
console.log(typeof obj);

console.log(Array.isArray(fruits)); // TRUE
console.log(Array.isArray(obj));

let fruits1 = ["cherry", "mango", "grapes"];
console.log(fruits);
fruits.push("banana"); // add in array
console.log(fruits);

fruits.pop(); //remove  last in array
console.log(fruits);
console.log(fruits.pop()); // remove and return

// UNSHIFT ->> add in starting of array
fruits1.unshift("banana");
console.log(fruits1);

//SHIFT ->> remove in starting of array
fruits1.shift();
console.log(fruits1.pop()); // remove and return
console.log(fruits1);

//   PUSH AND POP ARE FAST THAN SHIFT AND UNSHIFT

// primitve vs reference data types
// primitive data types stores in stack
// primitive data types
let num1 = 6;
let num2 = num1;
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);
num1++;
console.log("after incrementing num1");
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);

// reference types , reference data  types stores in heap memory
// array
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log("after pushing element to array 1");
console.log("array1", array1);
console.log("array2", array2);

//    HOW TO CLONE ARRAY
let array = ["item", "item1"];
let array3 = ["item", "item1"]; //method 1 to clone array
let array4 = array.slice(0); // method 2 to clone array   // slice method
let array5 = [].concat(array); // method 3 to clone array

//   SPREAD OPERATOR to clone array

let array6 = [...array]; // spread operator

array.push("item"); // now only push in array not in array3
console.log(array === array3);
console.log(array === array4);
console.log(array === array4);
console.log(array === array5);
console.log(array === array6);
console.log(array);
console.log(array3);
console.log(array4);
console.log(array5);
console.log(array6);

//   TO ADD ELEMENT IN ARRAY( 3 method)
let array7 = array1.slice(0).concat(["item3", "item4"]);
let array8 = [].concat(array1, ["item3", "item4"]);
let array9 = [...array1, "item3", "item4"];
console.log(array7);
console.log(array8);
console.log(array9);

//                   for loop in array
let fhal = ["aaam", "seb", "kela"];
console.log(fhal.length); // how to find length of array
let fhal1 = [];
for (let i = 0; i < fhal.length; i++) {
  console.log(fhal[i]);
  console.log(fhal[i].toUpperCase());
  fhal1.push(fhal[i].toUpperCase());
}
console.log(fhal1);

// while loop in array
const fhal3 = ["apple", "banana"];
const fruits2 = [];
let i = 0;
while (i < fruits.length) {
  fruits2.push(fhal3[i].toUpperCase());
  i++;
}
console.log(fruits2);
