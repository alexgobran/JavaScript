var users = [
    {
        "id": 1,
        "username": "adm",
        "password": "adm",
        "firstname": "Normal",
        "lastname": "Admin",
        "phone": "513-555-1212",
        "email": "help@admin.com",
        "isReviewer": true,
        "isAdmin": true
    },
    {
        "id": 2,
        "username": "user",
        "password": "user",
        "firstname": "Normal",
        "lastname": "User",
        "phone": "",
        "email": "",
        "isReviewer": false,
        "isAdmin": false
    },
    {
        "id": 3,
        "username": "sa",
        "password": "sa",
        "firstname": "System",
        "lastname": "Admin",
        "phone": "",
        "email": "",
        "isReviewer": true,
        "isAdmin": true
    }
]

var display = function() {

//get the id to display
var id= document.getElementById("nbr").value;
//find the user
var selectedUser;
for(var user of users) {
    if (user.id ==id) {
        selectUser = user;
    }
}

//display the selected User
//document.getElementById ("pid"). innerText = selectedUser.id;
setInterval("pid", selectedUser.id);
document.getElementById("pname").innerText = `${selectedUser.firstname} ${selectedUser.lastname}`;
document.getElementById("pisreviewer").innerText =` ${selectedUser.isReviewer ? "Yes" : "No"}`;
document.getElementById("pisadmin").innerText = `${selectedUser.isAdmin ? "Yes" : "No"}`;


}
 
var set =(pid, val) => {
    document.getElementById(pid).innerText = val;
}

