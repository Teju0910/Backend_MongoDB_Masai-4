const express = require("express");

const  Book = require("../models/user.modules");

const router = express.Router();

router.post("/",
body("content").trim().not().isEmpty().withMessage("Please Enter content"),
body("likes").trim().not().isEmpty().withMessage("Please Enter age")
   .custom((value) => {
       if(value > 1 && value < 2 ){
           throw console.error();
       }
       return true;
   }),
   )

module.exports = router;