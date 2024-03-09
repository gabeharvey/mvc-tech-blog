// This Function Handles User Signup Process
const userSignup = async (event) => {
    event.preventDefault();
    const username = document.querySelector("#username").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();
    if (username && email && password) {
        const response = await fetch("/api/users/signup", {
            method: "POST",
            body: JSON.stringify ({ username, email, password }),
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            document.location.replace("/");
        } else {
            alert("User Signup Unsuccessful.");
        }
    }
};

// This Confirms if Signup Form Exists on Webpage, if Signup Form Exists Event Listener is Attached
const techBlogSignupForm = document.querySelector("#signup-form");
if (techBlogSignupForm) {
    techBlogSignupForm.addEventListener("submit", userSignup);
};