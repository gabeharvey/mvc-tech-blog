// Imports Required to Seed Database
const seedComments = require("./commentData");
const seedPosts = require("./postData");
const seedUsers = require("./userData");
const sequelize = require("../config/connection");

// This Function Seeds Database
const seedAll = async () => {
    await sequelize.sync ({ force: true });
    await seedComments();
    await seedPosts();
    await seedUsers();
    process.exit(0);
};

// This Calls seedAll Function
seedAll();