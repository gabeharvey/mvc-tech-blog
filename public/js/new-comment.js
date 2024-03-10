// This Function Handles New Comment Process
const newComment = async (event) => {
    event.preventDefault();
    const post_id = parseInt(window.location.pathname.split("/").pop());
    const content = document.querySelector("#content-new-techBlog-comment").value.trim();
    if (content) {
        const response = await fetch(`/api/comments`, {
            method: "POST",
            body: JSON.stringify ({ comment_text: content, post_id }),
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert("Create Comment Unsuccessful.");
        }
    }
};

// This Confirms if New Comment Form Exists on Webpage, if New Comment Form Exists Event Listener is Attached
const techBlogNewCommentForm = document.querySelector(".new-techBlog-comment-form");
if (techBlogNewCommentForm) {
    techBlogNewCommentForm.addEventListener("submit", newComment);
};