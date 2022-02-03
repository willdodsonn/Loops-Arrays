let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];


let myName = "Hello my name is ";
let andIn = " and I am ";
let yearsOld = " years old.";

const getAge = (birthDateObject) => {
	const today = new Date();
	const dob = new Date(birthDateObject);
  
	const yearsDifference = today.getFullYear() - dob.getFullYear();
  
	if (
	  today.getMonth() < dob.getMonth() ||
	  (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
	) {
	  return yearsDifference - 1;
	}
  
	return yearsDifference;
  };
  
 

let simplifier = function(person){
	return myName + person.name + andIn +  person.Date + yearsOld;
};

people.forEach((person) =>{
	return getAge(person)
})

console.log(people.map(simplifier));