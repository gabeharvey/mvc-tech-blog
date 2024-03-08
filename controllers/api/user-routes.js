// Imports Required for this Application
const { User } = require("../../models");
const router = require("express").Router();

// Function Gets All User Data
router.get("/", (req, res) => {
    User.findAll({
        attributes: { exclude: ["password"] },
    })
    .then ((dbUserData) => res.json(dbUserData))
    .catch ((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});