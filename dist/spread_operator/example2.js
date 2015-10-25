//multiple input parameter using spread operator
"use strict";
var numberArray1 = [12, 21, 32, 40];
var numberArray2 = [10, 22, 30];
var summation = function summation() {
    var sum = 0;
    for (var _len = arguments.length, items = Array(_len), _key = 0; _key < _len; _key++) {
        items[_key] = arguments[_key];
    }
    items.forEach(function (item) {
        sum = sum + item;
    });
    return sum;
};
var result1 = summation.apply(undefined, numberArray1);
console.log("Result1: ", result1);
var result2 = summation.apply(undefined, numberArray2);
console.log("Result2: ", result2);