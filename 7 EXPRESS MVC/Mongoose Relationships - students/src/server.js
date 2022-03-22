const app = require("./index");

const connect = require("./configs/db");

app.listen(4500, async() => {
    try{
        await connect();
        console.log("listining to port 4500")
    }
    catch(err){
        console.log(err.message)
    }
    
})
