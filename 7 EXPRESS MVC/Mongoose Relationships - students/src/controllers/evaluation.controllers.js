const express = require("express");

const Evaluation = require("../models/evaluation.models");
const Batch = require("../models/batch.models");
const User = require("../models/user.models");

const router = express.Router();
  //............... Books CRUD ............//.

  router.get("/", async (req,res) => {
    try {
        const evaluation = await Evaluation.find().lean().exec();   
        return res.status(200).send( {evaluation : evaluation});        
      } 
    catch (err) {
        return res.status(500).send({ message: err.message });
      }
  })

  router.post("/", async (req,res) => {
    try {
        const evaluation = await Evaluation.create(req.body);   
        return res.status(200).send(evaluation);
      } 
    catch (err) {
        return res.status(500).send({ message: err.message });
      }
  })

  router.get("/:id", async (req,res) => {
    try {
        const evaluation = await Evaluation.findById(req.params.id).lean().exec();   
        return res.status(201).send(evaluation);
      } 
    catch (err) {
        return res.status(500).send({ message: err.message });
      }
  })

  // router.patch("/:id", async (req,res) => {
  //     try {
  //         const book = await Book.findByIdAndUpdate(req.params.id, req.body,{
  //             new : true,
  //         }).lean().exec();

  //        return res.status(200).send(book); 
  //     }
  //     catch(err) {
  //         return res.status(500).send({message : err.message});
  //     }
  // });

  router.delete("/:id", async (req,res) => {
      try {
          const evaluation = await Evaluation.findByIdAndDelete(req.params.id).lean().exec();
          return res.status(500).send({message :err.message})     
        }
        catch(err){
            return err;
        }
  })

  module.exports = router;
