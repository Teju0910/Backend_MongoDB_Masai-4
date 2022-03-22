const app = require("./index");

const connect = require("./configs/db");

app.listen(4561, async() => {
    try{
        await connect();
        console.log("listining to port 4561")
    }
    catch(err){
        console.log(err.message)
    }
    
})
