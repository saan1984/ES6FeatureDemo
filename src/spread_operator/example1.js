//Array expansion using spread operator
var mathStudents = ["Sandeep","Sangeeta","Surabhi"],
    lawStudents = ["Sumanta","Rohan","Surendra"],
    allStudents= ["John", ...mathStudents,"Jack",...lawStudents];
console.log(allStudents);
