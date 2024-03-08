// Imports Required for Application
const { Post, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");
const router = require("express").Router();

// Retrieves All Posts by User
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

// This Retrieves User Post by ID
router.get("/:id", async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                { model: User, attributes: ["username"] },
                { model: Comment, include: [{ model: User, attributes: ["username"] }],},
            ],
        });
        if (!postData) {
            res.status(404).json({ message: "No Post Found." });
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create New Post Function when User Authenticated
router.post("/", withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

// This Function Updates Existing Post if User Authenticated
router.put("/:id", withAuth, async (req, res) => {
    try {
        const updatedPost = await Post.update(req.body, {
            where: { id: req.params.id },
        });
        if(!updatedPost) {
            res.status(404).json({ message: "No Post Found." });
            return;
        }
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});