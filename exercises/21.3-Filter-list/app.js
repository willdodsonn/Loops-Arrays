let names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];

//declare your function here
// const filterByName = (namesArray, searchCriteria) => {
//     names.map((name) => {
//         return name.toLowerCase().includes(searchCriteria);
//     });
// }


const filterByName = (namesArray, searchCriteria) => {
    let newArray = namesArray.map(function(name){
        if(name.toLowerCase().includes(searchCriteria)){
            return name;
        }
        else{
            return null;
        }
    });

    return newArray
}

console.log(filterByName(names, 'am'));

