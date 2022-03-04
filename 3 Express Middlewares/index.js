const express = require("express");
const app = express();

// app.use(allbook)

app.get("/books", allbook,function(req,res){
    console.log("Fetching all books")
})

app.get("/books/:name",singlebook,(req,res) => {  
    return res.send ({bookName: req.name})
})

function allbook(req,res,next){
    console.log("Loading")
    next();
}

function singlebook(req,res,next){
    req.name = req.params.name ;
    next();
}

const port =2020;
app.listen(port,function(req,res){
    console.log("Runnung on port",port)
})