import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";


// SAME CONFIG
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


// Login function
document.getElementById("loginForm").addEventListener("submit", function(e){

  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");


  signInWithEmailAndPassword(auth, email, password)

    .then((userCredential) => {

      message.style.color = "lightgreen";
      message.textContent = "Login successful!";

      console.log("Logged in:", userCredential.user.email);

      setTimeout(() => {
        window.location.href = "cindex.html";
      }, 1500);

    })

    .catch((error) => {

      message.style.color = "red";
      message.textContent = error.message;

    });

});
document.addEventListener("DOMContentLoaded", function () {

    // ======================
    // GET ELEMENTS
    // ======================

    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const message = document.getElementById("message");
    const registerBtn = document.getElementById("register-btn");
    const togglePassword = document.getElementById("togglePassword");


    // ======================
    // DUMMY LOGIN CREDENTIALS
    // ======================

    const VALID_EMAIL = "adii";
    const VALID_PASSWORD = "adii123";


    // ======================
    // LOGIN FUNCTION
    // ======================

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();


        if (email === "" || password === "") {

            message.style.color = "red";
            message.textContent = "Please enter email and password.";
            return;
        }


        if (email === VALID_EMAIL && password === VALID_PASSWORD) {

            message.style.color = "lightgreen";
            message.textContent = "Login successful! Redirecting...";


            setTimeout(function () {

                // OPEN cindex.html
                window.location.href = "cindex.html";

            }, 1000);

        }
        else {

            message.style.color = "red";
            message.textContent = "Invalid email or password.";

        }

    });


    // ======================
    // REGISTER BUTTON
    // ======================

    registerBtn.addEventListener("click", function () {

        window.location.href = "register.html";

    });


    // ======================
    // SHOW / HIDE PASSWORD
    // ======================

    if (togglePassword) {

        togglePassword.addEventListener("click", function () {

            if (passwordInput.type === "password") {

                passwordInput.type = "text";
                togglePassword.textContent = "🔓 ";

            } else {

                passwordInput.type = "password";
                togglePassword.textContent = "🔒";

            }

        });

    }

});