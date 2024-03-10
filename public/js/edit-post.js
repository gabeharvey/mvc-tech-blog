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