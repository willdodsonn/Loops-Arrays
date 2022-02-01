let list_of_numbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];
let odd = [];
let even = [];
// your code here
const mergeTwoList = () => {
    list_of_numbers.forEach((number => {
        if (number % 2 === 0) {
            even.push(number);
        }
        else {
            odd.push(number);
        }
    }));
    let newArray = [].concat(odd, even);
    return newArray;
}
//here odd and even are empty
console.log(mergeTwoList(list_of_numbers));


