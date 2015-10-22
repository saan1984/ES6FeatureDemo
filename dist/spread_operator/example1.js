"use strict";

var mathStudents = ["Sandeep", "Sangeeta", "Surabhi"];

var lawStudents = ["Sumanta", "Rohan", "Surendra"];

var allStudents = ["John"].concat(mathStudents, ["Jack"], lawStudents);

console.log(allStudents);

var numberArray = [12, 21, 32, 40];

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

var result = summation.apply(undefined, numberArray);

console.log(result);