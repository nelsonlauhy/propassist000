import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { firebaseConfig } from "./firebaseConfig.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login function
document.getElementById("loginButton").addEventListener("click", () => {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            if (user.emailVerified) {
                alert("Login successful!");
                // Redirect to dashboard or another page
                window.location.href = "dashboard.html";
            } else {
                alert("Please verify your email before logging in.");
            }
        })
        .catch((error) => {
            alert(`Login failed: ${error.message}`);
        });
});

// Register function
document.getElementById("registerButton").addEventListener("click", () => {
    const email = document.getElement
