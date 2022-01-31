let i = 20;

do {
    // Magic goes here;
    var additionalText = "";
    if(i===0){
        console.log("LIFTOFF");
        break;
    }
    else if(i%5===0){
       additionalText="!";
    }
    console.log(i+additionalText);
    i--;
} while (i >= 0);
