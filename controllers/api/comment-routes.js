// Libraries Required for this Application
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");
const router = require("express").Router();

// This Allows User to Create a New Comment
router.post("/", withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create ({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

// This Exports Router
module.exports = router;