// Code goes here
function matrixBuilder(numOfRowsAndColumns) {
    let newArray = [];
    // newArray.push(random);
    for (let j = 0; j < numOfRowsAndColumns[i]; j++) {   
        for (let i = 0; i < numOfRowsAndColumns; i++) {
            let random = Math.round(Math.random());
            newArray.push(random);
           

        }
    }
    return newArray;
}

// do not change anything from this line down
console.log(matrixBuilder(5))