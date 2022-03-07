const express = require("express");
const  app = express();
const port = 1234;

app.use(allLogger);

app.listen(port, function(req,res){
    console.log("Started...",port)
});

function allLogger(req, res, next){
    console.log("looging1 is procrcess");
    return next();
    console.log("looging1 is ended");
}


app.get("/books", function(req,res){
  return res.send({ route: "/books"})
})

function checkPermission(role){
 return function checkPermissionfun(req,res,next){
    if( role == "librarian" || role == "author"){
    console.log("looging2 is procrcess");
    return next();
    }
    else {
        console.log("wrong path selected")
    }
}
}

app.get("/libraries",checkPermission("librarian"), function(req,res){ 
  return res.send({ route: "/libraries", permission: true})
})

app.get("/libraries",checkPermission("author"), function(req,res){
  return res.send( { route: "/authors", permission: true})
})







