//  METHODS --->>>> function  inside objects

//               What is this?
// In JavaScript, the 'this' keyword refers to an object.

// Which object depends on how this is being invoked (used or called).

// The 'this' keyword refers to different objects depending on how it is used:

// In an object method, 'this' refers to the object.
// Alone, 'this' refers to the global object.
// In a function, 'this' refers to the global object.
// In a function, in strict mode, 'this' is undefined.
// In an event, 'this' refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer 'this' to any object.
//             Note

// 'this' is not a variable. It is a keyword. You cannot change the value of this.

const person = {
  name: "aryan ",
  age: 19,
  about: function () {
    console.log(`person name is ${this.name} and age is ${this.age}`);
  },
};
console.log(person.about);
person.about();

//           code form harshit
function personInfo() {
  console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
  firstName: "harsh",
  age: 8,
  about: personInfo, // about is a method and  its value is a function
};
const person2 = {
  firstName: "mohit",
  age: 18,
  about: personInfo,
};
const person3 = {
  firstName: "nitish",
  age: 17,
  about: personInfo,
};

person1.about();
person2.about();
person3.about();

//                    CALL(The JavaScript Function call() method calls a function with a given 'this' value and arguments provided individually.)

function about(hobby, favMusician) {
  console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
  firstName: "harshit",
  age: 8,
};
const user2 = {
  firstName: "mohit",
  age: 9,
};
about.call(user2);

//               APPLY
const func = about.bind(user2, "guitar", "bach");
func();
//  THIS IN ARROW FUNCTION
const user = {
  name: "aryan",
  age: 19,
  about: () => {
    console.log(this.name, this.age); // this in arrow functionn is taken from window or form surronding
  },
};
user.about.call(user);

//             BIND

const userr = {
  name: "aryan",
  age: 19,
  about: function () {
    console.log(this.name, this.age);
  },
};
userr.about();
const fun = userr.about.bind(userr);
