const { listenerCount } = require("process");

let allColors = [
	{label: 'Red', sexy: true},
	{label: 'Pink', sexy: false},
	{label: 'Orange', sexy: true},
	{label: 'Brown', sexy: false},
	{label: 'Pink', sexy: true},
	{label: 'Violet', sexy: true},
	{label: 'Purple', sexy: false},
];

function generateLI(color){
	// your code here
	ul = document.createElement('ul');
	for(let i = 0; i < allColors.length; i++){
		let item = document.createElement('li');
		item.appendChild(document.createTextNode(allColors[i]));
		list.appendChild(item)
	}
	return list;
}

function filterColors(color){
	// your code here
}

function generateHTMLFromArray(array){
	
	let filteredOptions = array.filter(filterColors);
	let LIs = filteredOptions.map(generateLI);

	let htmlString = '<ul>';
	LIs.forEach(function(elm){
		htmlString += elm;
	})
	htmlString += '</ul>';
	return htmlString;
}

console.log(generateHTMLFromArray(allColors));

