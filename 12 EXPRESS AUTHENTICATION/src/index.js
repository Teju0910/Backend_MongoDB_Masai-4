const express = require("express");

const userController = require("./controllers/user.controller")
//  const postController = require("./controllers/post.controller")
 const productController = require("./controllers/product.controller")

const {register,login} = require("./controllers/auth.controller")
const app = express();

app.use(express.json());
app.use("/user", userController)
 app.post("/register", register)
 app.post("/login", login)
//  app.use("/post", postController)
app.use("/product", productController)

module.exports = app;



