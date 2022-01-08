var arr = [4,5,734,43,45];

// Your code here, use the push function and the random function.
const randomGenerator = () => {
	let randomInteger = Math.floor(Math.random() * 30);
	return randomInteger
}
arr.push(randomGenerator());
arr.push(randomGenerator());

console.log(arr);