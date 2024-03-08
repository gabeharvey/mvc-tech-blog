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

// Function Allows New User Sign Up
router.post("/signup", async (req, res) => {
    try {
        const newUser = new User();
        newUser.username = req.body.username;
        newUser.email = req.body.email;
        newUser.password = req.body.password;
        const userData = await newUser.save();
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
        console.log(err);
    }
});