
const express = require("express");


const usersController = require("./controllers/user.controllers");
const autherController = require("./controllers/auther.controllers");
const bookController = require("./controllers/book.controllers");
const bookautherController = require("./controllers/bookauther.controllers");
const sectionController = require("./controllers/section.controllers");

const app = express();

app.use(express.json())

app.use("/user", usersController); // /users/abcd/fkhsdkfh/fkhsdk
app.use("/section", sectionController);
app.use("/bookauther", bookautherController);
app.use("/book", bookController);
app.use("/auther", autherController);

module.exports = app;


// CRUD OPERATIONS
// get => getting data from the server
// post => adding data to the server
// put / patch => updating data in the server
// delete => deleting data from the server




 



