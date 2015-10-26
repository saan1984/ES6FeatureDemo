// Map function With Arrow operator
"use strict";

var numbers = [1, 2, 3, 4, 5];
var result = numbers.map(function (number) {
  return number * 2;
});
console.log("Result: ", result);