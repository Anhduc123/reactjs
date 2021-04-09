import firebase from "firebase/app"
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


var firebaseConfig = {
    apiKey: "AIzaSyDAJBfH_jXjwcoA2qIwag1TN4cTNtrnpkc",
    authDomain: "react-slack-clone-8e5eb.firebaseapp.com",
    projectId: "react-slack-clone-8e5eb",
    storageBucket: "react-slack-clone-8e5eb.appspot.com",
    messagingSenderId: "525452137487",
    appId: "1:525452137487:web:ee8cd8632feee55856ff7a",
    measurementId: "G-1NK0D8F122"
  };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

  export default firebase;