var arr = [4,5,734,43,45];

// Your code here, use the push function and the random function.
const theRandomNumber = () => {
	let theNumber = Math.floor(Math.random() * 23)
	return theNumber
}
arr.push(theRandomNumber());
arr.push(theRandomNumber());


console.log(arr);