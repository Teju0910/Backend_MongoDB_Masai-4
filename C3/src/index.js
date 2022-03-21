
const express = require("express");

const Usercontroller = require("./controllers/user.controllers")

const app = express();

app.use(express.json());

module.exports = app;