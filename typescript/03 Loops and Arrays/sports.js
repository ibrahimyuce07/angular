var sports0ne = ["Golf", "Football", "Tennis"];
for (var i = 0; i < sports0ne.length; i++) {
    console.log(sports0ne[i]);
}
//let's use simplified
console.log("\n------------------\n");
for (var _i = 0, sports0ne_1 = sports0ne; _i < sports0ne_1.length; _i++) {
    var tempSport = sports0ne_1[_i];
    if (tempSport == "Golf") {
        console.log(tempSport + "<<Favorite");
    }
    else {
        console.log(tempSport);
    }
}
