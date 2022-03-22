const express = require("express");

const Bookauther = require("../models/bookauther.models");
const Auther = require("../models/auther.models");
const Book = require("../models/book.models");
const User = require("../models/user.models");
const Section = require("../models/section.models");

const router = express.Router();
    
  //............... Section CRUD ............//.

  router.get("", async (req,res) => {
    try {
        const section = await Section.find()
        .populate({
          path : "BookAutherId",
          populate:[{path:"AutherId",
          populate:[{path:"UserId",select : { UserId:0,_id: 0 }}]}],
         
          })
        .populate({
          path : "BookAutherId",
          populate:[{path:"BookId",select : { autherId:0,_id: 0 } }] 
          }) 
        .lean().exec();
    
        return res.status(200).send( {sections : section});
      } catch (err) {
        return res.status(500).send({ message: err.message });
      }
  })

  router.post("", async (req,res) => {
    try {
        const section = await Section.create(req.body);   
        return res.status(200).send(section);
      } 
    catch (err) {
        return res.status(500).send({ message: err.message });
      }
  })

  router.get("/:id", async (req,res) => {
    try {
        const section = await Section.findById(req.params.id).lean().exec();   
        return res.status(201).send(section);
      } 
    catch (err) {
        return res.status(500).send({ message: err.message });
      }
  })

  router.patch("/:id", async (req,res) => {
      try {
          const section = await Section.findByIdAndUpdate(req.params.id, req.body,{
              new : true,
          }).lean().exec();

         return res.status(200).send(section); 
      }
      catch(err) {
          return res.status(500).send({message : err.message});
      }
  });

  router.delete("/:id", async (req,res) => {
      try {
          const section = await Section.findByIdAndDelete(req.params.id).lean().exec();
          return res.status(500).send({message :err.message})     
        }
        catch(err){
            return err;
        }
  })

  module.exports = router;