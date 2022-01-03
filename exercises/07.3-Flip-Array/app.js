var arr = [45,67,87,23,5,32,60];

//Your code here.
let oppositeArr = []
for(let i = arr.length-1; i >= 0; i--){
    let item = arr[i];
    oppositeArr.push(item);
    
}
console.log(oppositeArr)