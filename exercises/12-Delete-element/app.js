var people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

//your code below
const deletePerson = (personToDelete) => {
    let resultArray = people.filter((element) => element !== personToDelete);
    return resultArray;
}


console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
