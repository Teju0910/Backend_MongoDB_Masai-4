const express = require("express");
const connect = require("./configs/db");
const UserController = require("./controllers/user.controller");
const todoController = require("./controllers/todo.controller")

const app = express();
app.use(express.json())
app.use("/user",UserController);
app.use("/todo",todoController)

app.listen(1010, async() => {
    try{
        console.log("listing to port 1010")
        await connect();
        console.log("listing to port 1010")
    }
    catch(err){
        console.log(err)
    }
})