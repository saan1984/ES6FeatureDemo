//multiple input parameter using spread operator
var numberArray1 = [12,21,32,40];
var numberArray2 = [10,22,30];
var summation = function(...items){
    var sum = 0;
    items.forEach(function(item) {
        sum = sum+item;
    });
    return sum;
};
var result1 = summation(...numberArray1);
console.log("Result1: ",result1);
var result2 = summation(...numberArray2);
console.log("Result2: ",result2);