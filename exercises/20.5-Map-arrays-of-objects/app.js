let people = [
	{ name: 'Joe', birthDate: new Date(1986, 10, 24) },
	{ name: 'Bob', birthDate: new Date(1975, 5, 24) },
	{ name: 'Erika', birthDate: new Date(1989, 6, 12) },
	{ name: 'Dylan', birthDate: new Date(1999, 12, 14) },
	{ name: 'Steve', birthDate: new Date(2003, 4, 24) }
];



let myName = "Hello, my name is ";
let andIn = " and I am ";
let yearsOld = " years old";

var d = new Date();
var n = d.getFullYear();
function getAge(birthYear){
	var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    age = currentYear - birthYear;
    return age;
}
calculatedAge = getAge();


function simplifier(person) {
	return myName + person.name + andIn + getAge(person.birthDate.getFullYear()) + yearsOld;
}

console.log(people.map(simplifier));
