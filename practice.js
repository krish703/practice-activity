
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAlpY7kJ0ew6Sei_e6Wt0TzH3wodx9sUMs",
    authDomain: "my-kwitter-app-a4f7a.firebaseapp.com",
    databaseURL: "https://my-kwitter-app-a4f7a-default-rtdb.firebaseio.com",
    projectId: "my-kwitter-app-a4f7a",
    storageBucket: "my-kwitter-app-a4f7a.appspot.com",
    messagingSenderId: "88121532516",
    appId: "1:88121532516:web:83349c092350c49b2d3f71"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addUser(){
    var user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({purpose : "adding user"});
}