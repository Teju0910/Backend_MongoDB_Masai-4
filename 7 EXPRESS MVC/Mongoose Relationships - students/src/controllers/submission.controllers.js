const express = require("express");

const Evaluation = require("../models/evaluation.models");
const Batch = require("../models/batch.models");
const User = require("../models/user.models");
const Student = require("../models/student.models");
const Submission  = require("../models/submission.models");

const router = express.Router();
  
  //...............Book and Auther CRUD ............//.

  router.get("/", async (req,res) => {
    try {
        const submission = await Submission.find()
        .populate({
          path : "StudentId",
          populate:[{path:"userId"}]
        })
        .lean().exec();   
// console.log(bookauther)
        return res.status(200).send( {Submission : submission});        
      } 
    catch (err) {
        return res.status(500).send({ message: err.message });
      }
  })

  router.post("/", async (req,res) => {
    try {
        const submission = await Submission.create(req.body);   
        return res.status(200).send(submission);
      } 
    catch (err) {
        return res.status(500).send({ message: err.message });
      }
  })
  // const submission = await Submission.findOne(
  //   { field1 : 1 }).sort(marks).limit(1).run( function(err, doc) {
  //     var max = req.body.marks;

  router.get("/topper", async (req,res) => {
    try {
      var mark = req.body.marks
        const submission = await Submission.find({})
        .sort({mark : 1})
        .limit(1)      
        .populate({
          path : "StudentId",
          populate:[{path:"userId"}]
        })

        return res.status(201).send(submission);
      } 
    catch (err) {
        return res.status(500).send({ message: err.message });
      }
  })

  router.patch("/:id", async (req,res) => {
      try {
          const submission = await Submission.findByIdAndUpdate(req.params.id, req.body,{
              new : true,
          }).lean().exec();

         return res.status(200).send(submission); 
      }
      catch(err) {
          return res.status(500).send({message : err.message});
      }
  });

  router.delete("/:id", async (req,res) => {
      try {
          const submission = await Submission.findByIdAndDelete(req.params.id).lean().exec();
          return res.status(500).send({message :err.message})     
        }
        catch(err){
            return err;
        }
  });

  module.exports = router;

