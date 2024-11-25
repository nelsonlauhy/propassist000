import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
import { firebaseConfig } from "./firebaseConfig.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get form elements
const loginForm = document.getElementById("loginForm");
const registerButton = document.getElementById("registerButton");
const messageDiv = document.getElementById("message");

// Login event
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            if (user.emailVerified) {
                messageDiv.textContent = "Login successful! Redirecting...";
                messageDiv.className = "text-success";
                // Redirect to your dashboard or another page
                setTimeout(() => {
                    window.location.href = "index.html";
                }, 2000);
            } else {
                messageDiv.textContent = "Please verify your email before logging in.";
                messageDiv.className = "text-danger";
            }
        })
        .catch((error) => {
            messageDiv.textContent = error.message;
            messageDiv.className = "text-danger";
        });
});

// Register event
registerButton.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            sendEmailVerification(user)
                .then(() => {
                    messageDiv.textContent = "Registration successful! Verification email sent.";
                    messageDiv.className = "text-success";
                })
                .catch((error) => {
                    messageDiv.textContent = error.message;
                    messageDiv.className = "text-danger";
                });
        })
        .catch((error) => {
            messageDiv.textContent = error.message;
            messageDiv.className = "text-danger";
        });
});
