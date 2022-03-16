const app = require("./index");
const connect = require("./configs/db");

app.listen(5656, async() => {
    try {
        await connect()
        console.log("listining to port 5656");
    }
    catch(err){
        console.log(err.message)
    }
})