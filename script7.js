//object or object literls
//key ->> string or in symbol
// we can apply for in loop in object but not for of loop but in map we can apply both
const person = {
  name: "aryan",
  age: "19",
  1: "one", //(1 is a string)
};
console.log(person.name);
console.log(person["name"]);
for (let key in person) {
  console.log(typeof key);
}

//          MAP(store key value pair)
//          MAP is iterable
//          store data in ordered fashion
//          duplicate keys are not allowed

const m = new Map();
m.set("name", "aryan");
m.set("age", 19);
m.set(1, "one"); // here 1 is number not a string
m.set([1, 2, 3, 4], "array");
console.log(m);
console.log(m.get("age")); // to access key in MAP
console.log(m.keys()); // return in form of array
for (let key of m.keys()) {
  console.log(key, typeof key);
}

// it gives key in form of array  in array 1st value is key and 2nd value is its value
for (let key of m) {
  console.log(key, typeof key);
}
for (let key of m) {
  console.group(Array.isArray(key));
}
// we can destructure with array syntax
for (let [key, value] of m) {
  console.log(key, value);
}

//           DIFFERENCE BETEWEEN MAPS AND OBJECT
// 1) object can only have string or symbol as key but in map  we can use anything  as a key like array ,number , string

//             CLONE  USING  object.assign

const obj = { key1: "value1", key2: "value2" };

const obj1 = obj;
console.log(obj);
console.log(obj1);
obj.key3 = "value3";
console.log(obj);
console.log(obj1); // add to both object
//    for solve this problem we use spread operator  we can do  like this ==>>>          const obj1 ={...obj}

//                         OPTIONAL CHAINING

const user = {
  name: "aryan",
  address: { housenumber: "1234" },
};

console.log(user.name);
