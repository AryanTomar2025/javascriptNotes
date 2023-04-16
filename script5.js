"use strict";
const ps = require("prompt-sync");
const prompt = ps();
//  filter method in array
const numbers = [1, 2, 3, 4, 5];
const isEven = (number) => {
  return number *2 === 0;
};
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

// reduce method

// aim = > sum of all the numbers in array with  the help of reduce
const num = [1, 2, 3, 4, 5];

const sum = num.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(sum);

// accumulator  , currenValue  , return
//   1                2            3
//   3                3            6
//   6                4            10
//   10               5            15

const userCart = [
  { productID: 1, productNAME: "mobile", price: 1200 },
  { productID: 2, productNAME: "laptop", price: 12000 },
  { productID: 3, productNAME: "tv", price: 120000 },
];
const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
  return totalPrice + currentProduct.price;
}, 0); // 0 is set to be initial value
console.log(totalAmount);
// totalPrice   ,   currentValue    ,     return
//   0                  {}                 1200
//   1200               12000              13200
//   13200              120000             133200(output)

//                  SORT METHOD

const num1 = [45, 78, 4, 7, 25];
num1.sort();
console.log(num1);

// in this javascript  sort  this in form  of string not a  number according to 1st digit

const num2 = [45, 78, 4, 7, 25];
num2.sort((a, b) => {
  return a - b; // acending order  and in decending order  b-a
});
console.log(num2);

//       FIND METHOD( to find element (first occurance))

const myArray = ["hello", " cat", "dog"];
function isLength(string) {
  return string.length === 3;
}
const ans = myArray.find(isLength);
console.log(ans);

const ans1 = myArray.find((string) => {
  return string.length === 3;
});
console.log(ans1);

//                  EVERY METHOD

// check if all  element is even or not
// if yes  then output is true  if one  of them is odd then  output is false
const num3 = [2, 4, 7, 8, 10];
const result = num3.every((num3) => {
  return num3 % 2 === 0;
});
console.log(result);

//                SOME  METHOD

const num4 = [3, 5, 7, 9];
const res1 = num4.some((num4) => {
  return num4 % 2 === 0;
});
console.log(res1);

//            FILL METHOD(value , start ,end)

const array1 = new Array(10).fill(-1);
console.log(array1);

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array2.fill(0, 1, 5);
console.log(array2); // changes the original array

//            SPLICE METHOD(start ,delete , insert)
//       >>> it also return deleted item in form  of array
const array3 = ["item1", "item2", "item3", "item4"];
array3.splice(1, 1); // delete in array
console.log(array3);

array3.splice(1, 0, "inserted item"); //insert in array
console.log(array3);

const deletedIteam = array3.splice(1, 2, "inserteditem", "insertediteam2");
console.log(array3);

console.log("deleted iteam", deletedIteam);
