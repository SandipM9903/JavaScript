var countries = ["India", "USA", "Australia", "Japan"];
//or we can decleare array like
var states = new Array("Rajastan", "Delhi", "Mumbai", "Assam");

console.log(states[1]);
console.log(states.length);

states[0] = "Punjab";
console.log(states);

var user = ["Sandip", "sandipmondal@gmail.com", 27, true];
console.log(user);

user.pop();
console.log("POP method : ",user);

user.unshift("New User");
console.log("Unshift Method : ",user);

user.shift();
console.log("Shift method : ",user);

console.log("Index of : ",user.indexOf("newyy"));  //As newyy is not present in the user array it will return -1
console.log("Array from", Array.from("Sandip"));