const firebaseConfig = {
    apiKey: "AIzaSyASyPSJOhy7bV_wt9i_19dbRIt-Q6GxmfQ",
    authDomain: "kwitter-2edaa.firebaseapp.com",
    databaseURL: "https://kwitter-2edaa-default-rtdb.firebaseio.com",
    projectId: "kwitter-2edaa",
    storageBucket: "kwitter-2edaa.appspot.com",
    messagingSenderId: "73104060194",
    appId: "1:73104060194:web:a5b704f44f9ea076933f7b"
  };
  firebase.initializeApp(firebaseConfig);

  n=localStorage.getItem("user_name");
  r=localStorage.getItem("room_name");

  function send(){
        msg=document.getElementById("message").value;
        firebase.database().ref(r).push({
         name:n,
          message:msg,
          like:0
        });
  }

function getData() { firebase.database().ref("/"+r).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1=message_data['name'];
message=message_data['message'];
like=message_data['like'];
nwt="<h4>"+name1+"<img class='user_tick' src='tick.png'></h4>";
mwt="<h4 class='message_h4'>"+message+"</h4>";
lwt="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='uo(this.id)'>";
swt= "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row=nwt+mwt+lwt+swt;
document.getElementById("output").value +="row";
//End code
      } });  }); }
getData();

function uo (message_id){
b_i=message_id;
likes=document.getElementById("b_i").value;
u_likes=Number(likes)+1;

firebase.database().ref(r).child(message_id).update({
      like:u_likes
});
}
getData();
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
  }
