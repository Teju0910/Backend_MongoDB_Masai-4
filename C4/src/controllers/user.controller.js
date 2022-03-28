const express = require("express");

const router =express.Router();

const User = require("../modules/user.module");

const auth= require("../middleware/authincate")

router.get("", async(req,res) => {
    try {
        const users = await User.find().lean().exec();
    }
    catch(err){
        console.log(err)
    }
});

router.post("", auth, async(req,res) => {
    try {
        const users = await User.create(req.body).lean().exec();
    }
    catch(err){
        console.log(err)
    }
});

module.exports = router