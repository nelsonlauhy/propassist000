document.addEventListener("DOMContentLoaded", () => {
    console.log("Attempting to load the sidebar...");
    const sidebarPlaceholder = document.getElementById("sidebar-placeholder");

    if (!sidebarPlaceholder) {
        console.error("Sidebar placeholder element not found.");
        return;
    }

    fetch("sidebar.html")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to load sidebar: ${response.statusText}`);
            }
            return response.text();
        })
        .then((html) => {
            console.log("Sidebar loaded successfully.");
            sidebarPlaceholder.innerHTML = html;
        })
        .catch((error) => {
            console.error("Error loading sidebar:", error);
        });
});

