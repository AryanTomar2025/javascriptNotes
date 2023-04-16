"use strict";
const prompt = require("prompt-sync")({ sigint: true });

//        FOR OF LOOP OF ARRAY==>// for...of loop iterates over values that the object defines to be iterated over.
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];
for (let fruit of fruits) {
  console.log(fruit);
}

for (let fruit of fruits) {
  fruits2.push(fruit.toUpperCase());
}
console.log(fruits2);

//       FOR IN LOOP IN ARRAY==>This loop iterates over enumerable properties of an object in an arbitrary order. It cares only about properties but not values.
const fruits1 = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits3 = [];
for (let index in fruits1) {
  console.log(index); // give  all index in fruits1 array
}
for (let index in fruits1) {
  console.log(fruits1[index]); // give all value of index in  array
}

for (let index in fruits) {
  fruits3.push(fruits1[index].toUpperCase()); // push   fruits1 array in fruits3
}
console.log(fruits3);

//                 array destructuring
const myArray = ["value1", "value2", "value3", "value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
let [myvar1, , myvar2, ...myNewArray] = myArray; // space between them skip value
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
console.log(myNewArray);

//OBJECTS ---> REFERENCE TYPE
//OBJECTS STORE KEY VALYE PAIRS
//OBJECTS DO NOT HAVE INDEX
//syntax  for object

const person = {
  // here  person is object
  // key(properties) --> name,age,hobbies,gender
  // key are string bydefault
  name: "harshit",
  age: 15,
  hobbies: ["coding", "sleeping", "listening music"],
};
console.log(person);

//  access data from objects
console.log(person["name"]);
console.log(person.name);
console.log(person.age); //console.age(person["age"])
console.log(person.hobbies);

// how  to add key value pair  to objects
person.gender = "male";
console.log(person);

//             difference between dot and bracket notaion
const key = "email";
const person1 = {
  name: "harshit",
  age: 22,
  "person hobbies": ["guitar", "sleeping", "listening music"],
};

// console.log(person["person hobbies"]);
person1[key] = "harshitvashisth@gmail.com";
console.log(person1);

//          HOW TO ITEREATE OBJECTS
const person3 = {
  name: "harshit",
  age: 22,
  "person hobbies": ["guitar", "sleeping", "music"],
};

//   WITH THE HELP OF  FOR IN LOOP
for (let key in person3) {
  console.log(key);
}
for (let key in person3) {
  console.log(person3[key]); // we dont use . (dot) it gives  us error
}

for (let key in person3) {
  console.log(`${key} :${person3[key]}`); //  do not give us hobbies in array form
}
for (let key in person3) {
  console.log(key, person3[key]); //   gives us hobbies in array form
}

//         WITH THE HELP OF OBJECTS.CASE

console.log(Object.keys(person3)); // gives  us keys in  the form of array

//           SPREAD OPERATOR
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArray = [...arr1];
console.log("newArray is", newArray);
const newArray2 = [...arr1, ...arr2]; // now total elements in newArray2 is 1,2,3,4,5,6
console.log("newArray2 is ", newArray2);
const newarray = [..."13456"]; // how to spread string
console.log(newarray);

// COMPUTED PROPROTIES

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

const obj = {
  objkey1: "myvalue1",
  objkey2: "myvalue2",
};

const obj0 = {
  // computed properties
  [key1]: value1,
  [key2]: value2,
};

const obj3 = {};

obj3[key1] = value1;
obj3[key2] = value2;
console.log(obj);
console.log(obj0);
console.log(obj3);

// spread operator in objects
const obj1 = {
  key1: "value1",
  key2: "value2",
  key1: "value3", //only upper value of key1 is taken
};
const obj2 = {
  key1: "value unique", // key 1 of obj2 is  taken beacause we spread obj 2 in last
  key3: "value3",
  key4: "value4",
};
const newOBJ = { ...obj1, ...obj2 };
console.log(newOBJ);
const newObject = { ...obj2, ...obj1, key69: "value69" };
console.log(newObject);
console.log(obj1);
console.log(obj2);

// object destructuring
const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};
//   method one
const bandname = band.bandName;
const famoussong = band.famousSong;
console.log(bandname);
console.log(famoussong);
// method second
const { bandName: var1, famousSong: var2 } = band;
console.log(var1);
console.log(var2);
//             HOW TO MAKE YEAR AND ANOTHER FAMOUSSONG  AS DIFFEREDNT OBJECTS;
let { bandName, famousSong, ...restProps } = band;
console.log(bandName);
console.log(restProps);

// objects inside array
// very useful in real world applications

const users = [
  { userId: 1, firstName: "harshit", gender: "male" },
  { userId: 2, firstName: "mohit", gender: "male" },
  { userId: 3, firstName: "nitish", gender: "male" },
  { userId: 4, firstName: "fukc", gender: "male" },
];

for (let user of users) {
  console.log(user);
} //  difference between for in loop  and for of loop
for (let user in users) {
  console.log(user);
}

// nested destructuring
const users1 = [
  { userId: 1, firstName: "harshit", gender: "male" },
  { userId: 2, firstName: "mohit", gender: "male" },
  { userId: 3, firstName: "nitish", gender: "male" },
];
const [user1, user2, user3] = users1;
console.log(user1); // user1, user3, user2  store  information from obj  user1;;

const [
  { firstName: user1firstName, userId },
  ,
  { firstName, gender: user3gender },
] = users;
console.log(user1firstName);
console.log(userId);
console.log(user3gender);
console.log(firstName);
