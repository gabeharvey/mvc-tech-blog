// Packages Required
const Comment = require("./Comment");
const Post = require("./Post");
const User = require("./User");

// Establishes One to Many Relationship Between User and Post Models
// Each User Can Have Multiple Posts
User.hasMany(Post, {
    foreignKey: "user_id",
});

// Establishes Each Post Belongs to One User
Post.belongsTo(User, {
    foreignKey: "user_id",
});

// Establishes Each Comment Belongs to One User
Comment.belongsTo(User, {
    foreignKey: "user_id",
});

// Establishes Each Comment Belongs to One Post
Comment.belongsTo(Post, {
    foreignKey: "post_id",
});

// Establishes One to Many Relationship Between Post and Comment Models
// Each Post Can Have Multiple Comments
Post.hasMany(Comment, {
    foreignKey: "post_id",
});

// Establishes One to Many Relationship Between User and Comment Models
// Each User Can Have Multiple Comments
User.hasMany(Comment, {
    foreignKey: "user_id",
});

// This Exports User, Post, and Comment Models
module.exports = { User, Post, Comment };