let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];

let myName = "Hello my name is "
let andIn = " and I am ";
let yearsOld = " years old."

const getAgeFromBirthDate = (year, month, day) => {
	const date = new Date();
	date.setFullYear(date.getFullYear() - year);
	date.setMonth(date.getMonth() - month);
	//date.setDate(date.getDate() - day);
	return date;
 };

let simplifier = function(person){
	return myName + person.name + andIn +;
};

console.log(people.map(simplifier));