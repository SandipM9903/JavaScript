//TODO : part 1 this keyword
//this keyword in java script engine will give us an empty scope but in browser it will return the window object

console.log(this);
var game = "Cricket";

function sayName() {
    var name = "Sandip";
    console.log(this);
}

sayName();