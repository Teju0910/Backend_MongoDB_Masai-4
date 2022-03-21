const express = require("express");

const  User = require("../models/user.modules");

const router = express.Router();

router.post("/",
body("firstName").trim().not().isEmpty().withMessage("Please Enter name"),
body("lastName").trim().not().isEmpty().withMessage("Please Enter name"),
body("age").trim().not().isEmpty().withMessage("Please Enter age")
   .custom((value) => {
       if(value < 1 && value > 150 ){
           throw console.error();
       }
       return true;
   }),
   body("email").isEmail().isEmpty().withMessage("Please Enter mail"),
   )

module.exports = router;