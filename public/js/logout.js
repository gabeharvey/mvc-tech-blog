// This Function Handles Logout Process
const techBlogLogout = async () => {
    const response = await fetch("/api/users/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
        document.location.replace("/");
    } else {
        alert("Logout Unsuccessful.");
    }
};

// This Confirms if Logout Button Exists on Webpage, if Logout Button Exists Event Listener is Attached
const techBlogLogoutBtn = document.querySelector("#techBlog-logout");
if (techBlogLogoutBtn) {
    techBlogLogoutBtn.addEventListener("click", techBlogLogout);
};