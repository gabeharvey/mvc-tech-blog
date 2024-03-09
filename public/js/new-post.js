// This Function Handles New Post Process
const newPost = async (event) => {
    event.preventDefault();
    const title = document.querySelector("#title-new-techBlog-post").value.trim();
    const content = document.querySelector("#content-new-techBlog-post").value.trim();
    if (title && content) {
        const response = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify ({ title, content }),
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert("Create Post Unsuccessful.");
        }
    }
};

// This Confirms if New Post Form Exists on Webpage, if New Post Form Exists Event Listener is Attached
const techBlogNewPostForm = document.querySelector(".new-techBlog-post-form");
if (techBlogNewPostForm) {
    techBlogNewPostForm.addEventListener("submit", newPost);
};