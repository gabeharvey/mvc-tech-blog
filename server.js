// Packages Required for this Application
const routes = require("./controllers");
const sequelize = require("./config/connection");
const express = require("express");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const eHandlebars = require("express-handlebars");
const handles = eHandlebars.create({ helpers: require("./utils/helpers") });