import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { firebaseConfig } from "./firebaseConfig.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Check user authentication state
onAuthStateChanged(auth, (user) => {
    if (user && user.emailVerified) {
        document.getElementById("welcomeTitle").innerText = `Welcome, ${user.email}!`;
    } else {
        // Redirect to login page if not authenticated
        window.location.href = "index.html";
    }
});
