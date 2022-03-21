const app = require("./index");


const port = 2222;
app.listen(port, () =>{
    try{
        console.log("listiing to port ", port)
    }
    catch(err){
        console.log(err);
    }
})