var firebaseConfig = {
      apiKey: "AIzaSyAOn1U19ga7OYq11RRqm336K8PI7TKXKwI",
      authDomain: "twitter-chacha.firebaseapp.com",
      databaseURL: "https://twitter-chacha-default-rtdb.firebaseio.com",
      projectId: "twitter-chacha",
      storageBucket: "twitter-chacha.appspot.com",
      messagingSenderId: "950524464052",
      appId: "1:950524464052:web:cb16c11ad3fd994761c0e1",
      measurementId: "G-5QBF9QDYEX"
    };
    
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "Welcome "+ user_name + "!";
      function addRoom() { room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose:"adding room name" }); 
      localStorage.setItem("room_name", room_name); 
      window.location = "kwitter_page.html";
 }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name:"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}