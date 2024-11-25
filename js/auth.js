import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { firebaseConfig } from "./firebaseConfig.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login Functionality
if (document.getElementById("loginButton")) {
    document.getElementById("loginButton").addEventListener("click", () => {
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user.emailVerified) {
                    alert("Login successful!");
                    window.location.href = "home.html";
                } else {
                    alert("Please verify your email before logging in.");
                }
            })
            .catch((error) => {
                alert(`Login failed: ${error.message}`);
            });
    });
}

// Registration Functionality
if (document.getElementById("registerButton")) {
    document.getElementById("registerButton").addEventListener("click", () => {
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                sendEmailVerification(user)
                    .then(() => {
                        alert("Registration successful! A verification email has been sent.");
                        window.location.href = "index.html";
                    })
                    .catch((error) => {
                        alert(`Error sending verification email: ${error.message}`);
                    });
            })
            .catch((error) => {
                alert(`Registration failed: ${error.message}`);
            });
    });
}
