// Code goes here
function matrixBuilder(numOfRowsAndColumns) {
    let rowArray = [];
    for (let j = 0; j < numOfRowsAndColumns; j++) {
        let newArray = [];
        for (let i = 0; i < numOfRowsAndColumns; i++) {
            let random = Math.round(Math.random());
            newArray.push(random);


        }
        rowArray.push(newArray);
    }
    return rowArray;
}

// do not change anything from this line down
console.log(matrixBuilder(5))