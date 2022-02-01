var people = ['juan', 'ana', 'michelle', 'daniella', 'stefany', 'lucy', 'barak', 'emilio'];

//your code below
const deletePerson = () => {
    let newArray = [];
    for (let i = 0; i < people.length; i++) {
        people.length = people.filter(value => value == '');
        return people.length;
    }
    newArray.push(people.length);
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
