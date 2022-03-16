const express = require("express");

const { body, validationResult } = require("express-validator");

const User = require("../models/user.model");

const router = express.Router();

//  console.log(router)
router.post('/',
    body("first_name").trim().not().isEmpty().withMessage("Please Enter your name"),
    body("last_name").trim().not().isEmpty().withMessage("Please Enter your last name"),
    body("email").isEmail().custom(async (value) => {
        const user = await User.findOne({ email : value});

        if(user){
            throw new Error("Email is already used")
        }
        return true;
    }),
    body("pincode").trim().not().isEmpty().withMessage("Please Enter Pin code")
        .isNumeric().withMessage("Pincode must be Number")
        .custom((value) => {
            if(value.length != 6 ){
                throw new Error(("Pin code must be sis Digits"));
            }
            return true;
        }),
    body("age").trim().not().isEmpty().withMessage("Please Enter your age")
        .isNumeric().withMessage("age must be Number")
        .custom((value) => {
            if(value < 1 || value > 100){
                throw new Error(("Invalid age"));
            }
            return true;
        }),  
    body("gender").trim().not().isEmpty().withMessage("Gender fiels can not be Empty"),

    async (req, res) => {
        try{
            const err = validationResult(req);
            console.log({ err });
            if(!err.isEmpty()) {
                return res.status(400).send({error: err.array()})
            }
            const user = await User.create(req.body);
            return res.status(201).send(user);
        }
        catch(err){
            return res.status(500).send({ message :err.message})
        }
    }
    );

    module.exports = router;
