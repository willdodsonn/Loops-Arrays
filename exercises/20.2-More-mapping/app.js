// myFunction = function(number){
//     return number * 3;
// }

// var myNumbers = [1, 2, 3, 4];
// // your code here
// let newArray = myNumbers.map(myFunction);

// console.log(newArray);
// 23,234,345,4356234,243,43,56,2
var myNumbers = [23,234,345,4356234,243,43,56,2];
let newArray = myNumbers.map((number)=>{
    return number * 3;
});
console.log(newArray);