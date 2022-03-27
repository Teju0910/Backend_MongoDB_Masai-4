const express =require("express");

const User = require("../models/user.model");

const upload = require("../middlewares/uploads")

const router = express.Router();
const fs = require('fs');

router.get("/single", async(req, res) => {   
    try {
        // console.log("user")
         const user = await User.find().lean().exec();

         return res.status(200).send(user);
    }
    catch(err){
        return res.status(500).send({ message : err.message});
    }
});

router.post("/single", upload.single("profile_pic"), async(req, res) => {  
    try{  
     
      const user = await User.create({
          first_name : req.body.first_name,
          last_name : req.body.last_name,
          profile_pic : req.file.path,        
      });
      return res.status(200).send(user);
  }
  catch(err){
      return res.status(500).send({ message : err.message});
  }
  })
  

router.patch("/single/:id", upload.single("profile_pic"), async(req, res) => {  
  try{   

    var Users = await User.findById(req.params.id).lean().exec();

    fs.unlink(Users.profile_pic, (er) => {
        if (er) {
             console.log(er);
            return err}
            console.log("file deleted")
        });

    const user = await User.findByIdAndUpdate(req.params.id,{$set:{profile_pic:req.file.path}})

    // const filePath=req.files.map((file)=>file.path)
            // const user = await User.findByIdAndUpdate(req.params.id,{
                // { first_name : req.body.first_name,
                //     last_name : req.body.last_name,
            //         profile_pic : req.file.path  }).lean().exec();
    return res.status(200).send(user);
}
catch(err){
    return res.status(500).send({ message : err.message});
}
})


router.delete("/single/:id",async(req,res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        .lean().exec();
        return res.status(200).send(user);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})

router.post("/multiple", upload.any("profile_pic"), async (req,res) =>{

    try {
        const filePaths = req.files.map((file) => {
           
            return file.path;
        })
       
        const user = await User.create({
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            profile_pic : filePaths,        
        });
  
      return res.status(200).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    } 
})

module.exports = router;