// Add your code here
const lyricsGenerator = (arr) => {
    let newLyrics = "";
    let numberCountOne = 0;
    arr.forEach((number) => {
        if(number === 0){
            newLyrics = newLyrics + 'Boom ';
            numberCountOne = 0;
        }
        else if(number === 1){
            newLyrics = newLyrics+ 'Drop the base ';
            numberCountOne++;
        }

        if(numberCountOne===3){
            newLyrics = newLyrics + '!!!Break the base!!! '
            numberCountOne = 0;
        }
    });
    return newLyrics;
};



// Don't change anything bellow this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))