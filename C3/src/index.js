
const express = require("express");

const Usercontroller = require("./controllers/user.controllers");
const Bookcontroller = require("./controllers/book.controllers");
const Commentcontroller = require("./controllers/comment.controllers");

const app = express();

app.use("/user",Usercontroller);
app.use("/book",Bookcontroller);
app.use("/comment",Commentcontroller);

app.use(express.json());

module.exports = app;