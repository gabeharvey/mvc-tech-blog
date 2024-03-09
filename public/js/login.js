// This Function Handles the Login Process
const techBlogLogin = async (event) => {
    event.preventDefault();
    const username = document.querySelector("#username-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();
    if (username && password) {
        const response = await fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify ({ username, password }),
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            document.location.replace("/");
        } else {
            alert("Login Attempt Unsuccessful.");
        }
    }
};

// If Login Form Exists on Webpage, Event Listener is Attached
const techBlogLoginForm = document.querySelector(".techBlog-login-form");
if (techBlogLoginForm) {
    techBlogLoginForm.addEventListener("submit", techBlogLogin);
};