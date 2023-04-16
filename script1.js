"use strict";
const ps = require("prompt-sync");
const prompt = ps({ sigint: true }); // const prompt = require("prompt-sync")({sigint:true});

let name = "  aryan "; //  how to declare variable(string)
console.log(name); //  print string
console.log(name.length); // gives length of string

name = name.trim(); // space ko hatata h
console.log(name);
console.log(name.length); // ab bina space ke print hogi

// now string is ARYAN

name = name.toUpperCase();
console.log(name);

// agar hume kuch part chahiye string ka

name = name.slice(0, 3);
console.log(name);

//DATA TYPES(primitive data types)
//string , numbers, booleans , undefined , null , BigInt , symbol

let age = 18;
let Name = "aryan";
console.log(typeof age); // through this we can check type of datatypes

// convert number to string

age = age + ""; // add empty string
console.log(typeof age);

// covert string to number
let string = "56";
string = +"56";
console.log(typeof string);
// SECOND METHOD

// let age = 87;
// age = String(age);
//console.log(typeof age);
//

// HOW TO ADD TWO STRING
let string1 = "aryan";
let string2 = "tomar";
let fullname1 = string1 + " " + string2;
console.log(fullname1);

let string3 = "6";
let string4 = "9";
let fullname2 = string3 + string4;
console.log(fullname2);
console.log(typeof fullname2);

//FULLNAME3 IS NUMBER NOT STIRNG
let string5 = "6";
let string6 = "9";
let fullname3 = Number(string5 + string6);
console.log(fullname3);

//NOW THIS TIME STRING7 AND STRING8 IS  FIRST CONVERT TO NUMBER AND THEN ADD
let string7 = "6";
let string8 = "9";
let fullname4 = +string7 + +string8;
console.log(fullname4);

//TEMPLATE STRING

let age1 = 18;
let firstName = "aryan";

// "my name is harshit and my age is 22 "
// let aboutMe = "my name is " + firstName + " and my age is " + age;

let aboutMe = `my name is ${firstName} and my age is ${age}`;

console.log(aboutMe);

//undefined
let firstname; //same as with war  but not with const agar hum const bna rhe h to humko unko define hi karna padega
console.log(typeof firstname);
firstname = "aryan";
console.log(typeof firstname, firstname);

// null 
let myVariable = null; // type of null is object
console.log(myVariable);
console.log(typeof myVariable); //BUG ,ERROR IN JAVASCRIPT

//BIGINT
let number = BigInt(123); // or ->123n
console.log(number);
console.log(Number.MIN_SAFE_INTEGER); //MIX INTEGER TO SAVE IN JAVASCRIPT
console.log(Number.MAX_SAFE_INTEGER); //MAX INTEGER TO SAVE IN JAVASCRIPT
//but with the help of bigint we can store huge number

//BOOLEANS AND COMPARISON OPERATOR
let num1 = 3;
let num2 = 4;
//boolean gives only  true or false
console.log(num1 < num2);
console.log(num1 > num2);

// == VS ===  and != VS !==

let num3 = 7;
let num4 = 7;
console.log(num1 == num2);

let num5 = "7";
let num6 = 7;
console.log(num5 == num6); // double equal only check value , it does not check datatype only in javascript same as with !=
let num7 = "7";
let num8 = 7;
console.log(num7 === num8); // triple equal check both datatypes and value same as with !

let n1 = 7;
let n2 = "7";
console.log(n1 != n2) // output = false but this is not true because value is same 

console.log(n1 !== n2) // output = true which is correct because datatype is not same 

// BREAK KEYWORD
for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}
console.log("helllo aryan");

//    CONTINUE KEYWORD

for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}
console.log("helllo aryan");

//            DO WHILE LOOP
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 4);

//The concat() method joins two or more strings.
let text1 = "sea";
let text2 = "food";
let result = text1.concat(text2);
console.log(result);

let text3 = "aryan";
let text4 = "ram";
console.log(text3.concat(" is a friend of ", text4));
