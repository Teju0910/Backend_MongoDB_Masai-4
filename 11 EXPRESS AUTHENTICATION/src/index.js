const express = require("express");
const connect = require("./configs/db");
const userController = require("./controllers/user.controller")
 const postController = require("./controllers/post.controller")

const {register,login} = require("./controllers/auth.controller")
const app = express();

app.use(express.json());


app.use("/user", userController)

app.post("/register", register)

app.post("/login", login)

app.use("/post", postController)

app.listen(1000, async () => {
    try{
        await connect();
        console.log("listening on port 1000")
    }
    catch(err){
        console.log(err.message);
    }
});