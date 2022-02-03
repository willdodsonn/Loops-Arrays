let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];
for(let i = 0; i < people.length; i++){
	let birthday = people[i];
	console.log(birthday);
}

let myName = "Hello my name is ";
let andIn = " and I am ";
let yearsOld = " years old.";

const getAge = (birthDateString) => {
	const today = new Date();
	const dob = new Date(birthDateString);
  
	const yearsDifference = today.getFullYear() - dob.getFullYear();
  
	if (
	  today.getMonth() < dob.getMonth() ||
	  (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
	) {
	  return yearsDifference - 1;
	}
  
	return yearsDifference;
  };
  
  console.log(getAge(1986,10,24));

let simplifier = function(person){
	return myName + person.name + andIn +  people + yearsOld;
};

console.log(people.map(simplifier));