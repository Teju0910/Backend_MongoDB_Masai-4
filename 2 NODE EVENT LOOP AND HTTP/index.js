const express = require("express");
const app = express();

app.get("/home", function(req,res){
    res.send("hello")
})

app.get("/home/bookes", function(req,res){
    res.json({The_Far_Field :"by Madhuri Vijay",
    A_Fine_Balance :"by Rohinton Mistry",
    A_Suitable_Boy :"by Vikram Seth",
    Tde_Far_Field :"by Madhuri Vijay"} )
})

const port = 9000
app.listen(port,function(req,res){
    console.log(`Running..`)
})

