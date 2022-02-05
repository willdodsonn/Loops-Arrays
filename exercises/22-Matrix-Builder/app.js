// Code goes here
function matrixBuilder(numOfRowsAndColumns){
   for(let i = 0;  i < numOfRowsAndColumns.length; i++){
       for(let j = 0; j < numOfRowsAndColumns[i].length; j++){
        return(i, j);
       }
   }
}

// do not change anything from this line down
console.log(matrixBuilder(5))