
const firebaseConfig = {
  apiKey: "AIzaSyC_orKjTVlk3O9v5gQAu7yAjxSwK7vrtFQ",
  authDomain: "chaty-f1486.firebaseapp.com",
  databaseURL: "https://chaty-f1486-default-rtdb.firebaseio.com",
  projectId: "chaty-f1486",
  storageBucket: "chaty-f1486.appspot.com",
  messagingSenderId: "240129715166",
  appId: "1:240129715166:web:04b0e66d04f10c48e34b4f"
};


firebase.initializeApp(firebaseConfig);
  
  apolo=localStorage.getItem("chater_name");
  
  document.getElementById("oname").innerHTML="Welcome " + apolo + " !";
  
  function a_r(){
  
      roomname=document.getElementById("poa").value;
  
      firebase.database().ref("/").child(roomname).update({
        purpose: "adding room name"
      });
      localStorage.setItem("room_name" , roomname);
  
      window.location="c.html";
  }
  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("roomname - " + Room_names);
        row="<div class='room_name' id="+Room_names+" onclick='redirecttoroom_name(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML+=row;
//End code
});});}
getData();

function redirecttoroom_name(name) { console.log(name);
   localStorage.setItem("room_name", name);
 window.location = "kwitter_page.html"; }

function out(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="c.html";
  }


