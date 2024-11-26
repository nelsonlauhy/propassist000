import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { firebaseConfig } from "./firebaseConfig.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Check Authentication State
onAuthStateChanged(auth, (user) => {
    if (user && user.emailVerified) {
        // Display the user's email in the welcome message
        document.getElementById("userEmail").innerText = user.email;
        document.getElementById("welcomeMessage").innerText = `Welcome, ${user.email}!`;
    } else {
        // Redirect to login page if not authenticated
        window.location.href = "index.html";
    }
});

// Logout Functionality
document.getElementById("logoutButton").addEventListener("click", () => {
    signOut(auth)
        .then(() => {
            // Redirect to login page after logout
            window.location.href = "index.html";
        })
        .catch((error) => {
            alert(`Logout failed: ${error.message}`);
        });
});
