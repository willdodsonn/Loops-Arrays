var arrayOfCelsiusValues = [-2,34,56,-10];

var arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(temprature){
	//add your code here and return the new value
	let fahrenheit = (temprature * 1.8) + 32;
	return fahrenheit
	
});

console.log(arrayOfFahrenheitValues);