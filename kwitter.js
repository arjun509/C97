var firebaseConfig = {
  apiKey: "AIzaSyBnPXV96WUT1dtcsqt_LB8vV5gqLRtnHE8",
  authDomain: "kwitter-fbcf0.firebaseapp.com",
  databaseURL:"https://kwitter-fbcf0-default-rtdb.firebaseio.com/",
  projectId: "kwitter-fbcf0",
  storageBucket: "kwitter-fbcf0.appspot.com",
  messagingSenderId: "669039645175",
  appId: "1:669039645175:web:99b3866bb20d0b725f9ef2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
}

