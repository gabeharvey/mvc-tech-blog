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

// This Function Displays Current User Posts
router.get("/dashboard", withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: { user_id: req.session.user_id },
            include: [{ model: User, attributes: ["username"] }],
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render("dashboard", {
            posts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// This Function Redirects User to Dashboard Page if Logged In, Displays Log In Form
router.get("/login", (req, res) => {
    if (req.session.logged_in) {
        res.redirect("/dashboard");
        return;
    }
    res.render("login");
});

// This Function Redirects User to Dashboard Page if Logged In, Displays Sign Up Form
router.get("/signup", (req, res) => {
    if (req.session.logged_in) {
        res.redirect("/dashboard");
        return;
    }
    res.render("signup");
});

// This Function Displays New Post Page
router.get("/newpost", (req, res) => {
    if (req.session.logged_in) {
        res.render("newpost");
        return;
    }
    res.redirect("/login");
});

// This Function Displays Edit Post Page
router.get("/editpost/:id", async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                { model: User, attributes: ["username"] },
                { model: Comment, include: [{ model: User, attributes: ["username"] }],},
            ],
        });
        const post = postData.get({ plain: true });
        res.render("editpost", {
            ...post,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// This Exports Router
module.exports = router;