// This Function Deletes Post
const deleteP = async (post_id) => {
    const response = await fetch(`/api/posts/${post_id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
        document.location.reload();
    } else {
        alert("Delete Post Unsuccessful");
    }
};

// This Function Handles Deletion of Post
const deletePostFunc = (event) => {
    if (event.target.matches(".delete-post")) {
        const post_id = event.target.getAttribute("data-post-id");
        deleteP(post_id);
    }
};

// Event Listener Added for Click
document.addEventListener("click", deletePostFunc);