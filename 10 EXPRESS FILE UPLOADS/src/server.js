const app = require("./index");
const connect = require("./configs/db")

app.listen(1111, async() => {
    try{
        await connect();
        console.log("listing to port 1111")
    }
    catch(err){  
        console.log("no",err.message);
    }
})

module.exports = connect;