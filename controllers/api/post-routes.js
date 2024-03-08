// Imports Required for Application
const { Post, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");
const router = require("express").Router();

// Retrieves Posts by User
router.get("/", async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{ model: User, attributes: ["username"] }],
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});