// Imports Required for Application
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");
const router = require("express").Router();

// This Function Displays Home Page
router.get("/", async (req, res) => {
    try {
        const postData = await Post.findAll ({
            include: [{ model: User, attributes: ["username"] }],
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render("homepage", {
            posts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// This Function Displays an Individual Post
router.get("/post/:id", withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                { model: User, attributes: ["username"] },
                { model: Comment, include: [{ model: User, attributes: ["username"] }], },
            ],
        });
        const post = postData.get({ plain: true });
        res.render("post", {
            ...post,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});