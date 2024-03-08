// Required Packages for Application
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const router = require("express").Router();

// This Establishes Routes for Application
router.use("/api", apiRoutes);
router.use("/", homeRoutes);

// This Exports Router
module.exports = router;