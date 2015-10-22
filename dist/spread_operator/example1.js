//Array expansion using spread operator
"use strict";

var mathStudents = ["Sandeep", "Sangeeta", "Surabhi"],
    lawStudents = ["Sumanta", "Rohan", "Surendra"],
    allStudents = ["John"].concat(mathStudents, ["Jack"], lawStudents);
console.log(allStudents);