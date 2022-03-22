const express = require("express");

const Batch = require("../models/batch.models");
// const Auther = require("../models/batch.models");
// const Book = require("../models/student.models");
// const User = require("../models/user.models");
// const Section = require("../models/submission.models");

const router = express.Router();
    
  //............... Section CRUD ............//.

  router.get("", async (req,res) => {
    try {
        const batch = await Batch.find().lean().exec();
    
        return res.status(200).send( {batch : batch});
      }
    catch (err) {
        return res.status(500).send({ message: err.message });
      }
  })

  router.post("", async (req,res) => {
    try {
        const batch = await Batch.create(req.body);   
        return res.status(200).send(batch);
      } 
    catch (err) {
        return res.status(500).send({ message: err.message });
      }
  })

  // router.get("/:id", async (req,res) => {
  //   try {
  //       const section = await Section.findById(req.params.id).lean().exec();   
  //       return res.status(201).send(section);
  //     } 
  //   catch (err) {
  //       return res.status(500).send({ message: err.message });
  //     }
  // })

  // router.patch("/:id", async (req,res) => {
  //     try {
  //         const section = await Section.findByIdAndUpdate(req.params.id, req.body,{
  //             new : true,
  //         }).lean().exec();

  //        return res.status(200).send(section); 
  //     }
  //     catch(err) {
  //         return res.status(500).send({message : err.message});
  //     }
  // });

  router.delete("/:id", async (req,res) => {
      try {
          const batch = await Batch.findByIdAndDelete(req.params.id).lean().exec();
          return res.status(500).send({message :err.message})     
        }
        catch(err){
            return err;
        }
  })

  module.exports = router;