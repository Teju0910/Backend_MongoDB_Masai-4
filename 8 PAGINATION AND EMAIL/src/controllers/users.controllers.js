const path = require("path");

const express = require("express");

const transporter = require("../configs/mail");

const User = require("../models/user.model");

const router = express.Router();

router.get("/", async (req,res) => {
try{

  const page = req.query.page || 1;
  const pagesize  = req.query.pagesize || 5;

  const skip = (page -1)*pagesize;

  const totalPages = Math.ceil((await User.find().countDocuments()) );
  const user = await User.find().skip(skip).limit(pagesize).lean().exec();
  return res.status(200).send({user})
}
catch(err){
  return err;
}
})

// const adminmail =["gchatfield6@twitpic.com","rmurrie7@fema.gov","apiechnik8@chron.com"]
// let i=0;
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);

    transporter.sendMail({
      from: '"Amazon admin" <admin@amazon.com>', // sender address
      to: user.email, // list of receivers
      subject: `Welcome to ABC system ${user.first_name} ${user.last_name}` , // Subject line
      text: `Hi ${user.first_name}, Please confirm your email address`, // plain text body
    });
    transporter.sendMail({
      from: '"Amazon admin" <admin@amazon.com>', // sender address
      to: ["sgoroni0@technorati.com","gchatfield6@twitpic.com","rmurrie7@fema.gov","apiechnik8@chron.com","tphipardshears1@surveymonkey.com"], // list of receivers
      subject: `${user.first_name} ${user.last_name} has registered with us` , // Subject line
      text: `Please welcome ${user.first_name} ${user.last_name}`, // plain text body
    });

    return res.status(201).send({ message: "Registered successfully" });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
