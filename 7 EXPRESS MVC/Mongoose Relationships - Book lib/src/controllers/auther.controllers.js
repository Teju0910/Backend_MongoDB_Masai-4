const express = require("express");

const User = require("../models/user.models");
const Auther = require("../models/user.models");

const router = express.Router();
   
  //............... Auther CRUD ............//.

  router.get("/", async (req,res) => {
    try {
        const auther = await Auther.find().lean().exec();   
        return res.status(200).send( {authers : auther});        
      } 
    catch (err) {
        return res.status(500).send({ message: err.message });
      }
  })

  router.post("/", async (req,res) => {
    try {
        const auther = await Auther.create(req.body);   
        return res.status(200).send(auther);
      } 
    catch (err) {
        return res.status(500).send({ message: err.message });
      }
  })

  router.get("/:id", async (req,res) => {
    try {
        const auther = await Auther.findById(req.params.id).lean().exec();   
        return res.status(201).send(section);
      } 
    catch (err) {
        return res.status(500).send({ message: err.message });
      }
  })

  router.patch("/:id", async (req,res) => {
      try {
          const auther = await Auther.findByIdAndUpdate(req.params.id, req.body,{
              new : true,
          }).lean().exec();

         return res.status(200).send(auther); 
      }
      catch(err) {
          return res.status(500).send({message : err.message});
      }
  });

  router.delete("/:id", async (req,res) => {
      try {
          const auther = await Auther.findByIdAndDelete(req.params.id).lean().exec();
          return res.status(500).send({message :err.message})     
        }
        catch(err){
            return err;
        }
  });

  module.exports = router;