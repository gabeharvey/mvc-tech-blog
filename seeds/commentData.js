// This Imports Comment Model
const { Comment } = require("../models");

// This Initially Seeds Database with Comment Data
const commentData = [
    {
        comment_text: "Coding is Awesome!",
        user_id: 1,
        post_id: 1,
    },
    {
        comment_text: "Coding is Awesome!",
        user_id: 2,
        post_id: 1,
    },
    {
        comment_text: "Coding is Awesome!",
        user_id: 3,
        post_id: 1,
    },
    {
        comment_text: "Coding is Awesome!",
        user_id: 4,
        post_id: 1,
    },
    {
        comment_text: "MVC Achieves Separation of Concerns!",
        user_id: 1,
        post_id: 2,
    },
    {
        comment_text: "MVC Achieves Separation of Concerns!",
        user_id: 2,
        post_id: 2,
    },
    {
        comment_text: "MVC Achieves Separation of Concerns!",
        user_id: 3,
        post_id: 2,
    },
    {
        comment_text: "MVC Achieves Separation of Concerns!",
        user_id: 4,
        post_id: 2,
    }
];

// This Inserts Comment Data into Database
const seedComments = () => Comment.bulkCreate(commentData);

// This Exports seedComments Function
module.exports = seedComments;