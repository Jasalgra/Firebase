console.log("It work main");

let firstName = document.querySelector("firstName");
let lastName = document.querySelector("lastName");
let email = document.querySelector("email");
let btnGetForm = document.querySelector("btnGetForm");

// function getDataForm() {
//     console.log("fdgf");
//     let  eVal = email.value;
//     // co
// }
// btnGetForm.onclick  = getDataForm;
var mainApp =  {};
(function(){
    var firebase = app_fireBase;
var userId = null;
    
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            userId = user.userId;
        }
        else {
            //user-
            userId = null;
            window.location.replace('login.html')
        }
    });
    function logOut() {
        firebase.auth().signOut();
    }
    mainApp.logOut = logOut;
})();

