var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (chunk_one, chunk_two) => {
    let newArray = [].concat(chunk_one, chunk_two);
    //your code here
  
    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));