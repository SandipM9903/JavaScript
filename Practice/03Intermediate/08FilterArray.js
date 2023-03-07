var testArray = [2,4,1,6,5,7,9,8];
console.log(testArray.fill("Sandip", 5 , 7));

const myNumber = [23,11,44,55,33,54,65,76,87,92];
const result = myNumber.filter((number) => {
    return number>55;
});

console.log(result);

var users = ["Sandip", "Sushil", "Puspa", "Snigdha", "Kritick", "Kaushik"];
console.log(users.slice(1,3));

users.splice(1,2,"FATHER","MOTHER");
console.log(users);