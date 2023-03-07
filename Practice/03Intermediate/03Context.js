//Function declarations are scanned and made available

sayName();

function sayName()
{
    console.log("Sandip");
}

//Variables declarations are scanned and made them undeffined

console.log(name);
var name = "Sandip Mondal"
console.log(name);