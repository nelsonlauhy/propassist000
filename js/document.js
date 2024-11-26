import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Initialize Firebase Authentication
const auth = getAuth();

// Check Authentication Status
onAuthStateChanged(auth, (user) => {
    if (user) {
        // Display the user's email in the navbar
        document.getElementById("userEmail").textContent = user.email;
    } else {
        // Redirect to login page if not authenticated
        window.location.href = "login.html";
    }
});

// Logout Functionality
document.getElementById("logoutButton").addEventListener("click", () => {
    signOut(auth)
        .then(() => {
            // Redirect to login page after logout
            window.location.href = "login.html";
        })
        .catch((error) => {
            console.error("Error signing out: ", error);
        });
});
