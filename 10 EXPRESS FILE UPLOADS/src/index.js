const express = require("express");

const usersController = require("./controllers/user.controller")

const app =express();

app.use(express.json());

app.use("/user",usersController)

module.exports = app;

const connect = require("./server");
