const express = require("express");

const  Book = require("../models/user.modules");

const router = express.Router();

router.post("/",
body("body").trim().not().isEmpty().withMessage("Please Enter comment"),

)

module.exports = router;