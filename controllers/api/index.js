// Imports Required for Application
const commentRoutes = require("./comment-routes");
const postRoutes = require("./post-routes");
const userRoutes = require("./user-routes");
const router = require("express").Router();

// This Establishes Routes Required for Application
router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);

// This Exports Router
module.exports = router;