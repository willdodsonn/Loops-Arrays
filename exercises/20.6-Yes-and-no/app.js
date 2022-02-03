let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
let newArray = theBools.map((number) =>{
    if(typeof number === 1){
        newArray.push("wiki");
    }
    else if(typeof number === 0){
        newArray.push("woko");
    }
});
console.log(newArray);