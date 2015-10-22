//multiple input parameter using spread operator
var numberArray= [12,21,32,40];
var summation = function(...items){
    var sum = 0;
    items.forEach(function(item) {
        sum = sum+item;
    });
    return sum;
};
var result = summation(...numberArray);
console.log(result);