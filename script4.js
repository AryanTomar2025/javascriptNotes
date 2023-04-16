"use strict";
const ps = require("prompt-sync");
const prompt = ps();

//  FUNCTIONS IN JAVASCRIPT
function sumTwonumbers(number1, number2) {
  // number 1 and number2 are parametre
  return number1 + number2;
}
const returnValue = sumTwonumbers(5, 7); // 5,7 are argumnet
console.log(returnValue);

function searching(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const ans = searching(array, 8);
console.log(ans);

//  HOISTING
function helloo() {
  console.log("hello world");
}
helloo();

// in fucntion  declaratin we can call function before declaration but  in case  of functin expression and in case of arrow fucntion we cannot do it

helloo();
function helloo() {
  console.log("hello world");
}

//in function expression
const hello = function () {
  console.log("hello world");
};

hello();

// hellooo();        ---> now  it gives error
// const hellooo = function () {
//   console.log("hello world");
// };

//  IN CASE OF ARROW FUNCTIONN
const Hello = () => {
  console.log("aryan");
};
Hello();
//          THIS BEHAVIOR IS KNOW  AS HOISTING

//                                functions inside function
const app = () => {
  const myFunc = () => {
    console.log("hello from myFunc");
  };

  const addTwo = (num1, num2) => {
    return num1 + num2;
  };

  const mul = (num1, num2) => num1 * num2;

  console.log("inside app");
  myFunc();
  console.log(addTwo(2, 3));
  console.log(mul(2, 3));
};
app();

// lexical scoope

const myVar = "value1";

function myApp() {
  function myFunc() {
    const myFunc2 = () => {
      console.log("inside myFunc", myVar);
    };
    myFunc2();
  }

  console.log(myVar);
  myFunc();
}

myApp();

//  let and const are block scope and var is function scope

// default parameters

function addTwo(a, b) {
  if (typeof b === "undefined") {
    b = 1;
  }
  return a + b;
}
const n = addTwo(4, 5);
console.log(n);

// or we can do this by
function addTwo(a, b = 0) {
  return a + b;
}
const m = addTwo(4, 5);
console.log(m);

//              REST PARAMETRE

function myFunc(a, b, ...c) {
  console.log(`a is ${a}`);
  console.log(`b is ${b}`);
  console.log(`c is ${c}`);
}

myFunc(3, 4, 5, 6, 7, 8, 9); // 3,4,5,6 etc are the arguments

//                    call back function

function newFun() {
  console.log("inside my newFun");
}
function fun(callback) {
  console.log(callback); //    IN FUN  WE CAN  EXCEPT INPUT AS A FUNCTION AND THEN WE CAN CALL THIS  FUNCTION
  callback();
}

fun(newFun);

//  FUNCTION RETURNING FUNCTION

function Myfun() {
  function hello() {
    return "hello world";
  }
  return hello;
}
const Ans = Myfun();
console.log(Ans());

// Important array methods

//                                 FOR EACH METHOD

const number = [4, 2, 5, 8];

function multiplyby2(number, index) {
  console.log("index is ", index);
  console.log(`${number}*2 = ${number * 2}`);
}
for (let i = 0; i < number.length; i++) {
  // or we  can we do this by for each  ==>  number.forEach()
  multiplyby2(number[i], i);
}

const numberr = [1, 2, 3, 4]; // we have to multiply by 2

numberr.forEach(function (numberr) {
  console.log(numberr * 2);
});

//                PRACTICAL EXAMPLE OF FOR EACH

const users = [
  {
    name: "aryan",
    age: 18,
  },
  {
    name: "tomar",
    age: 13,
  },
  {
    name: "shiva",
    age: 18,
  },
];

users.forEach(function (user) {
  console.log(user.name);
});
//             BY FOR OF LOOP
for (let user of users) {
  console.log(user.name);
}

// arrow function

users.forEach((users) => {
  console.log(users.name);
});

//                      MAP METHOD

const numberss = [1, 2, 3, 4, 5];
const square = function (numbers) {
  return numbers * 5;
};
const squareNumber = numberss.map(square); // map always make a new array
console.log(squareNumber);

// if we dont return anything  means  we print in callback function
const numberss1 = [1, 2, 3, 4, 5];
const square1 = function (numbers) {
  console.log(numberss1 * numberss1);
};
const squareNumber1 = numberss.map(square1); // map always make a new array
console.log(squareNumber1);
// then it gives us  undefined

//                                using arrow function

const squareNumber2 = numberss.map((number, index) => {
  return `index:${index},${number * number}`;
});
console.log(squareNumber2);
