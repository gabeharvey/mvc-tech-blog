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

// This Function Allows User Log In
router.post("/login", async (req, res) => {
    try {
        const userData = await User.findOne ({ where: { username: req.body.username } });
        if(!userData) {
            res.status(400).json({ message: "Username or Password is NOT Valid." });
            return;
        }
        const validPassword = await userData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: "Email or Password is NOT Valid." });
            return;
        }
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json({ user: userData, message: "Log In Success." });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});