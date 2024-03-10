// This Extracts Post Information
const post_id = window.location.toString().split("/") [
    window.location.toString().split("/").length - 1
];

// This Function Edits Post Information
const editPost = async (event) => {
    event.preventDefault();
    const title = document.querySelector("#post-title").value.trim();
    const content = document.querySelector("#post-content").value.trim();
    if (title && content) {
        const response = await fetch(`/api/posts/${post_id}`, {
            method: "PUT",
            body: JSON.stringify ({ title, content }),
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert("Edit Post Unsuccessful.");
        }
    }
};

// This Function Deletes Post Information
const deletePost = async (event) => {
    event.preventDefault();
    const response = await fetch(`/api/posts/${post_id}`, {
        method: "DELETE",
    });
    if (response.ok) {
        documentlocation.replace("/dashboard");
    } else {
        alert("Delete Post Unsuccessful.");
    }
};

// This Confirms if Edit Post Button Exists on Webpage, if it Exists an Event Listener is Added
const techBlogEditPostBtn = document.querySelector("#update-techBlog-post");
if (techBlogEditPostBtn) {
    techBlogEditPostBtn.addEventListener("click", editPost);
};

// This Confirms if Delete Post Button Exists on Webpage, if it Exists an Event Listener is Added
const techBlogDeletePostBtn = document.querySelector("#delete-techBlog-post");
if (techBlogDeletePostBtn) {
    techBlogDeletePostBtn.addEventListener("click", deletePost);
};