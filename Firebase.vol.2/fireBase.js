console.log("It work fireBase");

let app_fireBase = {};

(function(){
    // <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBXc093FIDO22KcenzQOM9NggBZdQAzdSE",
    authDomain: "rest-api-48264.firebaseapp.com",
    databaseURL: "https://rest-api-48264.firebaseio.com",
    projectId: "rest-api-48264",
    storageBucket: "rest-api-48264.appspot.com",
    messagingSenderId: "868334850617",
    appId: "1:868334850617:web:78aa137988ac74419933e8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  app_fireBase = firebase;

//   app_fireBase.ptototype.setData = function;
})()