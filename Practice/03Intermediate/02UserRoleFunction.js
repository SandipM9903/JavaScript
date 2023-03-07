/*
Define a function that can answer the role of a user
A user can be on following roles:
admin - with all access
subadmin - with access to create/delete cources
user - consume all content
other - trial user

Input : getUserRole(name, role)
*/


/*
We can also write the function like below which means we can store function inside a variable

var getUserRole = function(name, role)
{

}
*/

function getUserRole(name, role)
{
    switch (role) {
        case "admin":
            return `${name} is admin`;
        case "subadmin":
            return `${name} with access to create/delete cources`;
        case "user":
            return `${name} consume all content`;
        default:
            return `${name} trial user`;
    }
}

console.log(getUserRole("Sandip","admin"));