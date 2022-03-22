const express = require("express");

const User = require("../models/user.models");
const Batch = require("../models/batch.models");
const Student = require("../models/student.models");

const router = express.Router();
   
  //............... student CRUD ............//.

  router.get("/", async (req,res) => {
    try {
        const student = await Student.find()
        .populate({
          path : "userId",
          select : ["first_name","last_name","gender","dateOfBirth"] 
      })
        .lean().exec();   
        return res.status(200).send( {students : student});        
      } 
    catch (err) {
        return res.status(500).send({ message: err.message });
      }
  })

  router.post("/", async (req,res) => {
    try {
        const student = await Student.create(req.body);   
        return res.status(200).send(student);
      } 
    catch (err) {
        return res.status(500).send({ message: err.message });
      }
  })

  // router.get("/:id", async (req,res) => {
  //   try {
  //       const auther = await Student.findById(req.params.id).lean().exec();   
  //       return res.status(201).send(section);
  //     } 
  //   catch (err) {
  //       return res.status(500).send({ message: err.message });
  //     }
  // })

  // router.patch("/:id", async (req,res) => {
  //     try {
  //         const auther = await Auther.findByIdAndUpdate(req.params.id, req.body,{
  //             new : true,
  //         }).lean().exec();

  //        return res.status(200).send(auther); 
  //     }
  //     catch(err) {
  //         return res.status(500).send({message : err.message});
  //     }
  // });

  router.delete("/:id", async (req,res) => {
      try {
          const Student = await Student.findByIdAndDelete(req.params.id).lean().exec();
          return res.status(500).send({message :err.message})     
        }
        catch(err){
            return err;
        }
  });

  module.exports = router;