// Imports Required for Application
const commentRoutes = require("./comment-routes");
const postRoutes = require("./post-routes");
const userRoutes = require("./user-routes");
const router = require("express").Router();

// This Establishes Routes Required for Application
router.use("/comments", commentRoutes);
router.use("/posts", postRoutes);
router.use("/users", userRoutes);

// This Exports Router
module.exports = router;