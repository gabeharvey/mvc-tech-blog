// This Imports Sequelize Library
const Sequelize = require("sequelize");

// This Imports .env Information
require("dotenv").config();

// This Allows Connection to MySQL Database
const sequelize = process.env.JAWSDB_URL
    ? new Sequelize (process.env.JAWSDB_URL)
    : new Sequelize (process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: "localhost",
        dialect: "mysql",
        dialectOptions: {
            decimalNumbers: true,
        },
    });

// This Exports Sequelize
module.exports = sequelize;