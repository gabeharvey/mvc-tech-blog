// This Imports User Model
const { User } = require("../models");

// This Initially Seeds Database with User Data
const userData = [
    {
        username: "blogger1",
        email: "blogger1@codingrules.com",
        password: "Password1",
    },
    {
        username: "blogger2",
        email: "blogger2@codingrules.com",
        password: "Password2",
    },
    {
        username: "blogger3",
        email: "blogger3@codingrules.com",
        password: "Password3",
    },
    {
        username: "blogger4",
        email: "blogger4@codingrules.com",
        password: "Password4",
    },
];

// This Inserts User Data into Database
const seedUsers = () => User.bulkCreate(userData);

// This Exports seedUsers Function
module.exports = seedUsers;