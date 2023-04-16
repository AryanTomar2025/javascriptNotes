"use strict";
const ps = require("prompt-sync");
const prompt = ps();

// how to print every character of string
const s = "Aryan Tomar";
for (let char of s) {
  console.log(char); // we can do this because string and array  is iterables similarly we can  do this for array
}

//  but object is not iterable
// array like object ==> jinke pas length property  hoti h aur jinko hum index se access kar sakte h. ex: String

//                     SET
// 1) Sets(it is  iterable)
// 2) Store data
// 3) Sets also have its own method
// 4) No index-based access
// 5) Order is not guaranted
// 6) Unique items only(means no duplicate is not allowed)
// with the help of  . operator we can add element in set

const numbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]); // we can also add string in SET
console.log(numbers);
//   console.log(numbers[2]) ==> This will give us error(undefined)
for (let item of numbers) {
  console.log(item);
}

// how to extract  unique  element from array

const array = [1, 2, 4, 4, 5, 7, 8, 8];
const uni = new Set(array);
console.log(uni);
console.log(array);
let length = 0;

// how to  find length

for (let element of uni) {
  length++;
}
console.log(length);
