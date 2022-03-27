
const express = require("express")

const router = express.Router();
const authenticate = require("../middlewares/authenticate")
 const authorise = require("../middlewares/authorise")
const Product = require("../models/product.models")
//  authenticate,authorise("seller"),

router.post("",authenticate, async (req, res) => {
    console.log( req.body)     
    try{
        const product = await Product.create(req.body);
        return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})

router.get("", async(req, res) => {
    try{
        const products = await Product.find().lean().exec();
        return res.status(200).send(products);
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})

router.patch("/:id", authenticate,authorise(["seller","buyer"]), async(req, res) => {
    try{
        // console.log("a", req.user._id)  
        req.body.user_id =req.user._id;
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true})
        return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
});

// router.delete("/:id", authenticate,authorise("seller"),async (req, res) => {
//     try {
//       const product = await Product.findByIdAndDelete(req.params.id).lean().exec();
//       // db.users.deleteOne({_id: Object('622893471b0065f917d24a38')}) 
//       return res.status(200).send(product);
//     } catch (err) {
//       return res.status(500).send({ message: err.message });
//     }
//   });  


module.exports = router;

