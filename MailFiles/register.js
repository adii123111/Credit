 
// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";


// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDPrkFq30P7ZDdNFVsSfmXWCOXuFYZfx2I",
  authDomain: "login-606ca.firebaseapp.com",
  projectId: "login-606ca",
  storageBucket: "login-606ca.firebasestorage.app",
  messagingSenderId: "120538246243",
  appId: "1:120538246243:web:56a542840db1327d6f1c56"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// Register function (called from HTML)
window.register = function () {

  const email = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");


  // Validation
  if (email === "" || password === "") {

    message.style.color = "red";
    message.textContent = "Please enter email and password";
    return;
  }


  // Create user in Firebase
  createUserWithEmailAndPassword(auth, email, password)

    .then((userCredential) => {

      const user = userCredential.user;

      message.style.color = "lightgreen";
      message.textContent = "Registration successful!";

      console.log("User registered:", user.email);


      // Redirect to login page
      setTimeout(() => {
        window.location.href = "Index.html";
      }, 2000);

    })

    .catch((error) => {

      message.style.color = "red";
      message.textContent = error.message;

      console.error(error);

    });

};

// document.addEventListener("DOMContentLoaded", function () {
//   document
//     .getElementById("register-nowbtn")
//     .addEventListener("click", function () {
//       window.open("cindex.html");
//     });
// });
