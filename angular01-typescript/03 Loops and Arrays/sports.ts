let sports0ne: string[] = ["Golf", "Football", "Tennis"];

for (let i = 0; i < sports0ne.length; i++) {
    
    console.log(sports0ne[i]);
}

//let's use simplified
console.log("\n------------------\n");

for(let tempSport of sports0ne) {
    if (tempSport == "Golf") {
         console.log(tempSport + " <<Favorite");
    }
    
    else {
        console.log(tempSport);
        
    }
    
}