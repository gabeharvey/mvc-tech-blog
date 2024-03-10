// Packages Required for this Application
const routes = require("./controllers");
const sequelize = require("./config/connection");
const express = require("express");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const eHandlebars = require("express-handlebars");
const handles = eHandlebars.create({ helpers: require("./utils/helpers") });
const app = express();
const PORT = process.env.PORT || 3001;

// This Initializes Session Middleware
const sess = {
    secret: "Super secret secret",
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore ({
        db: sequelize,
    }),
};