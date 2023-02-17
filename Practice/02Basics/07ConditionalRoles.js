//Create an application with following roles
//Admin - Get full access
//Sub-admin - Create / Delete courses
//Tetsprep - Create / Delete tests
//User - Consume content

var role = "testprep";

switch (role) {
    case "admin":
        console.log("Get full access");
        break;
    case "subadmin":
        console.log("Create / Delete courses");
        break;
    case "tetsprep":
        console.log("Create / Delete tests");
        break;
    case "user":
        console.log("Consume content");
        break;
    default:
        break;
}
