document.addEventListener("DOMContentLoaded", () => {
    const navbarPlaceholder = document.getElementById("navbar-placeholder");

    if (!navbarPlaceholder) {
        console.error("Navbar placeholder element not found.");
        return;
    }

    fetch("navbar.html")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to load navbar: ${response.statusText}`);
            }
            return response.text();
        })
        .then((html) => {
            navbarPlaceholder.innerHTML = html;

            // Reinitialize logout button functionality after navbar is loaded
            const logoutButton = document.getElementById("logoutButton");
            logoutButton?.addEventListener("click", () => {
                import("https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js").then(({ getAuth, signOut }) => {
                    const auth = getAuth();
                    signOut(auth)
                        .then(() => {
                            window.location.href = "index.html";
                        })
                        .catch((error) => {
                            alert(`Logout failed: ${error.message}`);
                        });
                });
            });
        })
        .catch((error) => {
            console.error("Error loading navbar:", error);
        });
});
