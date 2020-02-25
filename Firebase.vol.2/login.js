console.log("It work login");


(function(){


// The Firebase Auth instance.
var auth = firebase.auth();


    //     // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());



    var uiConfig = { 
        callbacks: { 
            signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                // User successfully signed in.
                // Return type determines whether we continue the redirect automatically
                // or whether we leave that to developer to handle.
                return true;
            },
            uiShown: function() {
                // The widget is rendered.
                // Hide the loader.
                document.getElementById('loader').style.display = 'none';
            }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: 'main.html',
        signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: 'main.html',
        // Privacy policy url.
        // privacyPolicyUrl: '<your-privacy-policy-url>'
    };

    // Initialize the FirebaseUI Widget using Firebase.
        // var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
        ui.start('#firebaseui-auth-container', uiConfig);

})();


// <!-- TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyBXc093FIDO22KcenzQOM9NggBZdQAzdSE",
//     authDomain: "rest-api-48264.firebaseapp.com",
//     databaseURL: "https://rest-api-48264.firebaseio.com",
//     projectId: "rest-api-48264",
//     storageBucket: "rest-api-48264.appspot.com",
//     messagingSenderId: "868334850617",
//     appId: "1:868334850617:web:78aa137988ac74419933e8"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>