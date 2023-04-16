"use strict";
const ps = require("prompt-sync");
const prompt = ps({ sigint: true });
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];
for (let fruit in fruits) {
  console.log(fruit);
}
