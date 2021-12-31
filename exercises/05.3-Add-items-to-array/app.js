var arr = [4,5,734,43,45];

// Your code here, use the push function and the random function.
const randomNumberGenerator = () => {
	let randomNumbers = Math.floor(Math.random() * 69);
	return randomNumbers;
}


arr.push(randomNumberGenerator());
arr.push(randomNumberGenerator());



console.log(arr);