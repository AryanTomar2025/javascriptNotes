// JAVASCRIPT NOTES (CLEVER PROGRAMMER)
console.log("hello aryan");

// decleration of variable
var b = "smoothie";
console.log(b);
var num = 8; // adding  or subtracting in variable
num = num + 8;
console.log(num);
console.log(num % 6);
console.log(num / 6);
//increament  and decrement
num += 10; // num = num +8
console.log(num);

//FUNCTION
/*
1) create a function
2) call of function
 */

// creating a function
function fun() {
  console.log("this is a function");
}
// calling of function
fun();

/*
 lets create a function that take in a name and says hello followed
 by your name 
 */

/*
function greeting(yourname){
    var result = 'hello ' +   yourname;
    console.log(result);
}
 var fullname = prompt('what is your name');
greeting(fullname); 
*/

// how do arguments work in function ?
function sum(num1, num2) {
  var result = num1 + num2;
  console.log(num1 + num2);
}
sum(34, 54); //  or we can add string like sum('aryan' , 'tomar')

/*for(let num =0; num<= 8 ; num++){
     console.log(num);
 } */

var num = 0;
while (num < 5) {
  num += 1;
  console.log(num);
}
for (let num = 0; num < 6; num++) {
  console.log(num);
}

// Data types

let yourage = 18; //number
let yourname = "bob"; //string
let name = { first: "raman", last: "tomar" }; //object
let truth = false; //undefined
let groceries = ["apple", "banana", "oranges"]; // array
let nothing = null; // value null
let fruits = "baNana"; // or we can put many fruits
let morefruits = "banana\napple"; //new line
console.log(fruits.length);

console.log(morefruits);

console.log(fruits.indexOf("a")); //

console.log(fruits.indexOf("h")); //give a - integer

console.log(fruits.slice(2, 6));

console.log(fruits.replace("baN", "123"));

console.log(fruits.toLocaleLowerCase(fruits));

console.log(fruits.toUpperCase(fruits));

console.log(fruits.charAt(2));

console.log(fruits[2]);

console.log(fruits.split(",")); //split by comma

console.log(fruits.split("")); //split by character

//ARRAY IN JAVASCRIPT
let fruit = ["apple", "banana", "oranges"];
let phals = new Array("apple", "banana", "oranges");
alert(fruit[2]); //access value at index 2nd

fruit[0] = "pear"; // to change index value in array
console.log(fruit);

for (let i = 0; i < fruit.length; i++) {
  console.log(fruits[i]);
}
//array common methods

console.log("to string", fruit.toString());

console.log(fruit.join("-"));

console.log(fruit, fruit.pop(), fruit); //removes last item and list has been changed

console.log(fruit.push("blackberries"), fruit); //appends

console.log(fruit[2]);

fruit[3] = "new fruit";

// if we dont know lenght of array we can use  fruit[fruit.length] = 'new fruit'

console.log(fruit);

fruit.shift(fruit); // removes first element from array

console.log(fruit);

fruit.unshift("kiwi"); // add a first element

console.log(fruit);

let vegetables = ["potato", "tomato", "broccoli"];

let allGroceries = fruit.concat(vegetables);

console.log(allGroceries);

console.log(allGroceries.reverse());

console.log(allGroceries.sort());

console.log(allGroceries.slice);

let somenumbers = [4, 5, 9, 7, 2, 3, 9, 7, 4];
console.log(
  somenumbers.sort(function (a, b) {
    return a - b;
  })
);
console.log(
  somenumbers.sort(function (a, b) {
    return b - a;
  })
);

let emptyArray = new Array();
for (let num = 0; num <= 0; num++) {
  emptyArray.push(num);
}
console.log(emptyArray);

//object in  javascript
//dictionaries in python

let student = {
  first: "aryan",
  last: "tomar",
  age: "25",
  studentInfo: function () {
    return this.first + "\n" + this.last + "\n" + this.age;
  },
};
console.log(student.first);

console.log(student.last);

student.first = "not aryan"; // change value

console.log(student.first);

student.age++;

console.log(student.age);

console.log(student.studentInfo());

//conditional , controls  flows(if else)

var age = prompt("what is your age ?");

if (age >= 18 && age <= 35) {
  statusbar = "target demoo ";
  console.log(statusbar);
} else {
  statusbar = "not my audience";
  console.log(statusbar);
}

// status statement
// differentiate between weekday and weekend
//day 0 -- sunday
//day 6-- saturday
//day 4 -- thrusday
switch (6) {
  case 0:
    text = "weekend";
    break;
  case 5:
    text = "weekend";
    break;
  case 6:
    text = "weeday";
    break;
  default:
    "weekday";
}
console.log(text);
