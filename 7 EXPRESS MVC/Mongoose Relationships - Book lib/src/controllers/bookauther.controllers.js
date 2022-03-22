const express = require("express");

const BookAuther = require("../models/bookauther.models");
const Auther = require("../models/auther.models");
const User = require("../models/user.models");

const router = express.Router();
  
  //...............Book and Auther CRUD ............//.

  router.get("/", async (req,res) => {
    try {
        const bookauther = await BookAuther.find().populate({
            path : "BookId",
            select : ["book_name","book_body"] 
        }).populate({
          path : "AutherId",
          populate:[{path:"UserId"}]
        }).lean().exec();   
// console.log(bookauther)
        return res.status(200).send( {bookauther : bookauther});        
      } 
    catch (err) {
        return res.status(500).send({ message: err.message });
      }
  })

  router.post("/", async (req,res) => {
    try {
        const bookauther = await BookAuther.create(req.body);   
        return res.status(200).send(bookauther);
      } 
    catch (err) {
        return res.status(500).send({ message: err.message });
      }
  })

  router.get("/:id", async (req,res) => {
    try {
        const bookauther = await BookAuther.findById(req.params.id).lean().exec();   
        return res.status(201).send(bookauther);
      } 
    catch (err) {
        return res.status(500).send({ message: err.message });
      }
  })

  router.patch("/:id", async (req,res) => {
      try {
          const bookauther = await BookAuther.findByIdAndUpdate(req.params.id, req.body,{
              new : true,
          }).lean().exec();

         return res.status(200).send(bookauther); 
      }
      catch(err) {
          return res.status(500).send({message : err.message});
      }
  });

  router.delete("/:id", async (req,res) => {
      try {
          const bookauther = await BookAuther.findByIdAndDelete(req.params.id).lean().exec();
          return res.status(500).send({message :err.message})     
        }
        catch(err){
            return err;
        }
  });

  module.exports = router;

