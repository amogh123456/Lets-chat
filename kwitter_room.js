var firebaseConfig = {
    apiKey: "AIzaSyCDcog7_EKID_seImCVrz4QW4ETYdwPvTY",
    authDomain: "lets-chat-db1da.firebaseapp.com",
    databaseURL: "https://lets-chat-db1da-default-rtdb.firebaseio.com",
    projectId: "lets-chat-db1da",
    storageBucket: "lets-chat-db1da.appspot.com",
    messagingSenderId: "755785647064",
    appId: "1:755785647064:web:d13ecf76e949618710e8ad",
    measurementId: "G-DCP6G2BGCE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    });});}
getData();