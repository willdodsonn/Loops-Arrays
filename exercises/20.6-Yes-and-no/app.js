let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
let newArray = theBools.map((number) =>{
    if(number === 1){
        return "wiki";
    }
    else if(number === 0){
        return "woko";
    }
});
// newArray.forEach((item)=>{
//     console.log(item);
// });
console.log(newArray);