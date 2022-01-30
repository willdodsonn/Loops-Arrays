let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
for(let i in par){
    const count = par[i].toLowerCase();
    
    if(count == " ") continue;
    else if(counts[count] == undefined){
        console.log("found "+ count + " for the first time");
        counts[count]=1;
    }
    else{
        console.log("found "+ count + " more than once");
        counts[count]=counts[count]+1
    }

    
}
console.log(counts);