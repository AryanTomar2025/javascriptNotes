// function (that function create object)
// 2.) add key value pair
// 3.) object ko return krega

//          FUNCTION WHICH CREATE OBJECT AND RETURN OBJECT

// function createUser(firstName, lastName, email, age, address) {
//   const user = {};
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.email = email;
//   user.age = age;
//   user.address = address;
//   user.about = function () {
//     return `${this.firstName} is ${this.age} years old.`;
//   };
//   user.is18 = function () {
//     return this.age >= 18;
//   };
//   return user;
// }

// const user = createUser(
//   "harshit",
//   "vashsith",
//   "harshit@gmail.com",
//   19,
//   "my address"
// );
// console.log(user);
// const is18 = user.is18();
// const about = user.about();
// console.log(about);

//            BETTER WAY

const userMethods = {
  about: function () {
    return `${this.firstName} is ${this.age} years old.`;
  },
  is18: function () {
    return this.age >= 18;
  },
};
function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = userMethods.about;
  user.is18 = userMethods.is18;
  return user;
}

const user1 = createUser(
  "harshit",
  "vashsith",
  "harshit@gmail.com",
  9,
  "my address"
);
const user2 = createUser(
  "harsh",
  "vashsith",
  "harshit@gmail.com",
  19,
  "my address"
);
const user3 = createUser(
  "mohit",
  "vashsitha",
  "harshit@gmail.com",
  17,
  "my address"
);
console.log(user1.about());
console.log(user3.about());

//               MORE BETTER WAY

const obj1 = {
  key1: "value1",
  key2: "value2",
};

// offical ecmascript documentation => [[prototype]] = __proto__ which is different of prototype
// proto create chain
// proto establish a relationship between two objects

const obj2 = Object.create(obj1); // {}
// there is one more way to create empty object
obj2.key3 = "value3";
// obj2.key2 = "unique";
console.log(obj2);

console.log(obj2.__proto__); // proto of  obj2 is obj1

//                            WAY
const userMethodss = {
  about: function () {
    return `${this.firstName} is ${this.age} years old.`;
  },
  is18: function () {
    return this.age >= 18;
  },
};
function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(userMethodss); // important line
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}

const userr1 = createUser(
  "harshit",
  "vashsith",
  "harshit@gmail.com",
  9,
  "my address"
);
const userr2 = createUser(
  "harsh",
  "vashsith",
  "harshit@gmail.com",
  19,
  "my address"
);
const userr3 = createUser(
  "mohit",
  "vashsitha",
  "harshit@gmail.com",
  17,
  "my address"
);
console.log(userr1.about());
console.log(userr3.about());
