// This Imports Post Model
const { Post } = require("../models");

// This Initially Seeds Database with Post Data
const postData = [
    {
        title: "Tech Blog Post 1",
        content: "I Enjoy Coding Using MVC!",
        user_id: 1,
    },
    {
        title: "Tech Blog Post 2",
        content: "I Enjoy Coding Using MVC!",
        user_id: 2,
    },
    {
        title: "Tech Blog Post 3",
        content: "I Enjoy Coding Using MVC!",
        user_id: 3,
    },
    {
        title: "Tech Blog Post 4",
        content: "I Enjoy Coding Using MVC!",
        user_id: 4,
    },
];

// This Inserts Post Data into Database
const seedPosts = () => Post.bulkCreate(postData);

// This Exports seedPosts Function
module.exports = seedPosts;