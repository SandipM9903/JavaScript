var name = "Sandip";

console.log("Line Number 3 : ", name);

function sayName()
{
    // var name = "S";
    console.log("Line Number 8 : ", name);
    sayNameTwo();

    function sayNameTwo() 
    {
        // var name = "SM";
        console.log("Line Number 14 : ", name);
    }
}

sayName();

//Scope chain only works with functions not with if-else, switch-case, for-loop....