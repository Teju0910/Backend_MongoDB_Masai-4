
const express = require("express");


const usersController = require("./controllers/user.controllers");
const studentController = require("./controllers/student.controllers");
const evaluationController = require("./controllers/evaluation.controllers");
const submissionController = require("./controllers/submission.controllers");
const batchController = require("./controllers/batch.controllers");

const app = express();

app.use(express.json())

app.use("/user", usersController); // /users/abcd/fkhsdkfh/fkhsdk
app.use("/student", studentController);
app.use("/evaluation", evaluationController);
app.use("/submission", submissionController);
app.use("/batch", batchController);

module.exports = app;


// CRUD OPERATIONS
// get => getting data from the server
// post => adding data to the server
// put / patch => updating data in the server
// delete => deleting data from the server




 



